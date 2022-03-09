import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchcoindetail } from "../../reducer/cryptoSlice";
import { AttachMoneyIcon } from "@material-ui/icons";
import Chart from "../PriceChart/Chart";
import {
  Box,
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Link,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import millify from "millify";
import moment from "moment";
import HTMLReactParser from "html-react-parser";

let useStyles = makeStyles((theme) => ({
  cryptolink: {
    "&:hover": {
      listStyle: "none",
      textDecoration: "none",
    },
  },
  listitem: {
    textAlign: "center",
  },
  cointitle: {
    textAlign: "center",
    padding: "10px 0",
    textDecoration: "underline",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
  listtitle: {
    textAlign: "center",
  },
}));

const CryptoDetail = () => {
  let classes = useStyles();
  let { id } = useParams();
  let dispatch = useDispatch();
  let coin = useSelector((state) => state.crypto.coindetail.coin);
  console.log(coin);
  useEffect(() => {
    dispatch(fetchcoindetail({ id }));
  }, []);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  let [date, setDate] = useState("7d");
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin?.price)}`,
    },
    { title: "Rank", value: coin?.rank },

    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: coin?.numberOfMarkets },
    { title: "Number Of Exchanges", value: coin?.numberOfExchanges },
    {
      title: "Total Supply",
      value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coin?.supply?.circulating && millify(coin?.supply?.circulating)
      }`,
    },
  ];

  let handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <Container>
        <Box>
          <Typography variant="h3" className={classes.cointitle} >
            {coin?.name}
          </Typography>
        </Box>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={date}
              onChange={handleChange}
            >
              {time.map((time) => (
                <MenuItem value={time} key={nanoid()}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Chart id={id} date={date} />
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              component="h5"
              
              className={classes.listtitle}
            >
              {coin?.name} Value Status
            </Typography>
            {stats.map((stats) => (
              <List key={nanoid()} dense={true}>
                <ListItem>
                  <ListItemText
                    primary={stats?.title}
                    className={classes.listitem}
                  />
                  <ListItemText
                    primary={stats?.value}
                    className={classes.listitem}
                  />
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              component="h5"
              
              className={classes.listtitle}
            >
              Other Value Status
            </Typography>
            {genericStats.map((stats) => (
              <List key={nanoid()} dense={true}>
                <ListItem>
                  <ListItemText
                    primary={stats?.title}
                    className={classes.listitem}
                  />
                  <ListItemText
                    primary={stats?.value}
                    className={classes.listitem}
                  />
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h1" >
              {" "}
              What is {coin?.name}{" "}
            </Typography>
            <Typography variant="body1" component="div">
              {coin && HTMLReactParser(coin?.description)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              Cryptocurrency Link
            </Typography>
            {coin?.links.map((link) => (
              <List key={nanoid()} dense={true}>
                <ListItem>
                  <ListItemText primary={link?.type} />
                  <Link
                    href={link?.url}
                    target="_blank"
                    className={classes.cryptolink}
                  >
                    {link?.name}
                  </Link>
                </ListItem>
              </List>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CryptoDetail;
