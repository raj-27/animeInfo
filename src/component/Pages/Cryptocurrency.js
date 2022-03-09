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
import millify from "millify";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

let useStyle = makeStyles(() => ({
  root: {
    width: 345,
    maxWidth: "90%",
  },
  media: {
    height: 150,
    width: 150,
    margin: "0 auto",
  },
  gridtext: {
    textAlign: "center",
  },
  griditem: {
    "&:hover": {
      listStyle: "none",
      textDecoration: "none",
    },
  },
}));

const Cryptocurrenncy = ({ count }) => {
  let classes = useStyle();
  let coins = useSelector((state) => state.crypto.coins);
  return (
    <>
      <Divider />
      <Container>
        <div className="home-top-10-crypto">
          <Box sx={{ padding: "1.5rem 0" }}>
            <Grid
              container
              align="center"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              {coins.map(
                (coin, index) =>
                  index < count && (
                    <Grid
                      key={nanoid()}
                      className={classes.griditem}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      component={Link}
                      to={`/cryptodetail/${coin.uuid}`}
                    >
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={coin.iconUrl}
                            title={coin.name}
                          />
                          <CardContent>
                            <Typography
                              
                              variant="h5"
                              component="h2"
                              className={classes.gridtext}
                            >
                              {coin.name}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="textSecondary"
                              component="h6"
                              className={classes.gridtext}
                            >
                              Price: {millify(coin.price)}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="textSecondary"
                              component="h6"
                              className={classes.gridtext}
                            >
                              Daily change : {millify(coin.change)}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="textSecondary"
                              component="h6"
                              className={classes.gridtext}
                            >
                              {" "}
                              Market cap : {millify(coin.marketCap)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Cryptocurrenncy;
