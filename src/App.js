import React, { useState, useEffect } from "react";
import {
  Typography,
  Switch,
  Slider,
  Box,
  Paper,
  Grid,
  Container,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/pagination";
import { motion } from "framer-motion";

export default function App() {
  let [items, setItems] = useState([]);
  let [pageInfo, setPageInfo] = useState({
    pageNum: 1,
    pageCount: 1,
  });

  useEffect(async () => {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageInfo.pageNum}&&_limit=10`
    );
    let response = await data.json();
    let total = data.headers.get("x-total-count");
    setPageInfo({ ...pageInfo, pageCount: Math.ceil(total / 10) });
    setItems(response);
  }, [pageInfo.pageNum]);
  console.log(items);
  return (
    <>
      <Container className="py-2">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          {items.map((item, i) => (
            <Grid key={item.id} item xs={12} sm={5} md={5} lg={3}>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .3, delay:i*0.025/i }}
                whileHover={{scale:.95,delay:0.5}}
              >
                <Paper elevation={5}>
                  <Box
                    padding={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "grey",
                      height: "100%",
                      minHeight: "16rem",
                      width: "100%",
                    }}
                  >
                    <Typography variant="body1" component="h1">
                      {item.body}
                    </Typography>
                    <Box sx={{marginY:3}}>
                      <Typography>{item.title}</Typography>
                      <Typography>Post number {++i}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Typography className="text-center mt-2">Page No. {pageInfo.pageNum}</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Pagination
            className="my-2"
            count={pageInfo.pageCount}
            color="secondary"
            onChange={(e, value) =>
              setPageInfo({ ...pageInfo, pageNum: value })
            }
            showLastButton
            showFirstButton
          />
          {/* <Switch
            color="secondary"
            defaultChecked={true}
            onChange={(e, val) => console.log(val)}
          /> */}
          {/* <Box sx={{ width: "10rem" }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              color="primary"
              onChange={(e, val) => console.log(val)}
            />
          </Box> */}
        </Box>
      </Container>
    </>
  );
}
