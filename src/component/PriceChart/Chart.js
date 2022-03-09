import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

let useStyle = makeStyles((theme) => ({
  chartsec1: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.35rem",
    },
  },
  chartsec2: {
    margin: "0 .5rem",
    textAlign: "center",
  },
  chart: {
    margin: ".8rem 0",
  },
  loss: {
    color: "#d32f2f",
  },
  profit: { color: "#43a047" },
}));

const Chart = ({ id, date }) => {
  let [coinhistory, setCoinHistory] = useState();
  let classes = useStyle();
  let coin = useSelector((state) => state.crypto.coindetail.coin);
  let coinprice = [];
  let coinTimeStamp = [];

  for (let i = 0; i < coinhistory?.data?.history.length; i++) {
    coinprice.push(coinhistory.data.history[i].price);
    coinTimeStamp.push(
      new Date(coinhistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  useEffect(async () => {
    let response = await fetch(
      `https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${date}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "92450be453mshd72b0b4709dd132p174f20jsn0f925158ff69",
        },
      }
    );
    let data = await response.json();
    setCoinHistory(data);
  }, [id, date]);

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "US Dollar",
        data: coinprice,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      {coin && (
        <>
          <Grid container spacing={2} className={classes.chart}>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.chartsec1}
                >
                  {coin?.name} Price Chart
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h6" className={classes.chartsec2}>
                    {coinhistory?.data?.change}
                  </Typography>
                  <Typography variant="h6" className={classes.chartsec2}>
                    Current {coin?.name} Price {millify(coin?.price)} US Dollar
                  </Typography>
                </Box>
              </Grid>
              <Line data={data} options={options} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Chart;
