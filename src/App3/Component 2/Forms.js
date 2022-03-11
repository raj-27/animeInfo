import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Link, Outlet } from "react-router-dom";

let useStyles =makeStyles((theme) =>({
box:{
    width:400,
    height:430,
    maxwidth:"90%",
    border:"1px solid grey"
}
}))

const Forms = () => {
    let classes=useStyles();
  return (
    <>
      <Box className={classes.box}>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Register</Link>
      </Box>
    </>
  );
};

export default Forms;
