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
  Avatar,
  CardMedia,
} from "@material-ui/core";
import millify from "millify";
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { fetchNews } from "../../reducer/cryptoSlice";

let useStyle = makeStyles((theme) => ({
  root: {
    width: 345,
    maxWidth: "90%",
  },
  media: {
    height: 100,
    width: 100,
  },
  gridtext: {
    textAlign: "center",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  newsboxs:{
    "&:focus":{
      border:"transparent",
      outline:"transparent",
    }
  }
}));

const Topnews = ({ count }) => {
  let classes = useStyle();
  let dispatch = useDispatch();
  let news = useSelector((state) => state.crypto.news);

  console.log(news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <Divider />
      <Container>
        <div className="home-top-10-crypto">
          <Box sx={{ padding: "1.5rem 0" }} >
            <Grid
              container
              align="center"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              {news && news.map(
                (item, index) =>
                  index < count && (
                    <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} className={classes.newsboxs}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",padding:"0 10px"}}>
                          <CardContent>
                          
                            <Typography variant="body2">{item.name}</Typography>
                          </CardContent>
                            <Avatar
                              alt="img_crypto"
                              src={item?.image?.thumbnail?.contentUrl || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AhWY2BQNQkaZ-aDRGDosqwHaEK%26pid%3DApi&f=1" }
                              className={classes.large}
                            />
                          </Box>
                         <CardContent>
                           <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".5rem"}}>
                           <Avatar alt="provide_img" src={item?.provider[0]?.image?.thumbnail?.contentUrl} className={classes.small} />
                             <Typography variant="body2">{item?.provider[0].name}</Typography>
                           </Box>
                             <Typography>
                                {moment(item.datePublished).startOf('ss').fromNow()}
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

export default Topnews;
