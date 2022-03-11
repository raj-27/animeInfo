import React, { useContext, useEffect } from "react";
import "./App3/componen2 css/LandingPage.css";

import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {NavLink, Outlet } from "react-router-dom";

let useStyles = makeStyles((theme) => ({
  landingimg: {
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "450px",
    },
  },
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  landingitem: {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  },
  gridcontainer: {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  },
  listtext: {
    fontFamily: "'Lobster','cursive'",
  },
  formsbox: {
    width: 350,
    height: 400,
    border: "1px solid grey",
  },
  innerbox: {
    width: "350px",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  outerbox: {
    width: "350px",
    maxWidth: "100%",
    backgroundColor: "#212121",
    padding: ".5rem 0 1rem 0",
    borderRadius: ".7rem",
  },
  linktext: {
    // maxWidth: "100%",
    padding: "0 1rem",
    margin: "1rem 10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  link: {
    color: "#f3f3f3",
    "&:hover": {
      color: "#f3f3f3",
      listStyle: "none",
      textDecoration: "none",
    },
  },
}));

export default function LandingPage() {
  let classes = useStyles();


  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={3} className={classes.gridcontainer}>
          <Grid item xs={12} md={6} className={classes.landingitem}>
            <img
              src="/images/Asta2.png"
              alt="landin_img"
              className={classes.landingimg}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={classes.outerbox}>
                <Box className={classes.innerbox}>
                  <NavLink
                    className={classes.link}
                    activeClassName="active"
                    to="/login"
                  >
                    <Typography className={classes.linktext} variant="h5">
                      Login
                    </Typography>
                  </NavLink>
                  <NavLink
                    className={classes.link}
                    activeClassName="active"
                    to="/registration"
                  >
                    <Typography className={classes.linktext} variant="h5">
                      Register
                    </Typography>
                  </NavLink>
                </Box>
                <Box>
                  <Outlet />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
