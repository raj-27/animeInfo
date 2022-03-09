import { makeStyles } from "@material-ui/core";
export let useStyle = makeStyles((theme) => ({
  logo: {
    height: "3.8rem",
    width: "3.8rem",
    borderRadius: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: "2.8rem",
      width: "2.8rem",
    },
  },
  logobtn: {
    "&:hover": {
      color: "#fefefe",
    },
  
  },
  
  desktopView: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  mobileView: {
    display: "block",
    marginLeft: "auto",
    "&:focus": {
      outline: "none",
    },
    color: "#fefefe",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  btn: {
    marginLeft: "3px",
    "&:hover": {
      textDecoration: "none",
      listStyle: "none",
      color: "#fefefe",
    },

    "&:focus": {
      outline: "none",
    },
  },
  box: {
    width: 200,
    height: "100vh",
  },

  listitem: {
    textAlign: "center",
  },
}));
