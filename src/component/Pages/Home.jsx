import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  makeStyles,
  Button,
  Divider,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { fetchCrypto } from "../../reducer/cryptoSlice";
import { useDispatch, useSelector } from "react-redux";
import millify from "millify";
import Cryptocurrency from "./Cryptocurrency";
import Topnews from "./Topnews";
let useStyle = makeStyles((theme) => ({
  container2: {
    placeItems: "center",
  },
  globalHeading: {
    textAlign: "center",
  },
  statsitems: {
    padding: "10px",
  },
  hometitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15rem",
      fontWeight: "bold",
    },
  },
}));

const Home1 = () => {
  let classes = useStyle();
  let dispatch = useDispatch();
  let stats = useSelector((state) => state.crypto.stats);

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <>
      {stats && (
        <div className={classes.homepage}>
          <Container className={`${classes.container} pt-3`}>
            <Grid container spacing={3} justifyContent="center">
              <Grid className={classes.globalHeading} item xs={12}>
                <Typography variant="h4" className={classes.hometitle}>
                  Global CryptoCurrenncy Status
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <Box className={classes.statsitems}>
                    <Typography variant="h6">Total Cryptocurrenncy</Typography>
                    <Typography variant="subtitle1">
                      {stats.totalCoins}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <Box className={classes.statsitems}>
                    <Typography variant="h6">Total Exchanges</Typography>
                    <Typography variant="subtitle1">
                      {millify(stats.totalExchanges)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <Box className={classes.statsitems}>
                    <Typography variant="h6">Total Maketcap</Typography>
                    <Typography variant="subtitle1">
                      {millify(stats.totalMarketCap)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <Box className={classes.statsitems}>
                    <Typography variant="h6">Total Market</Typography>
                    <Typography variant="subtitle1">
                      {millify(stats.totalMarkets)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <Box className={classes.statsitems}>
                    <Typography variant="h6">Total 24th Volume</Typography>
                    <Typography variant="subtitle1">
                      {millify(stats.total24hVolume)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
      <Container>
        <Box sx={{ padding: "20px 10px" }}>
          <Typography variant="h5">Top 10 Cryptocurrency</Typography>
        </Box>
      </Container>
      <Cryptocurrency count={9} />
      <Container>
        <Box sx={{ padding: "20px 10px" }}>
          <Typography variant="h5">Top 10 Cryptocurrency News</Typography>
        </Box>
      </Container>
      <Topnews count={9} />
    </>
  );
};

export default Home1;
