import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { ThemeContext } from "../Component 2/ThemeContext";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

let useStyles = makeStyles((theme) => ({
  textfields: {
    margin: ".8rem 0 ",
    backgroundColor: "#fefefe",
    borderRadius: ".3rem",
  },
  formbtn: {
    margin: "1rem 0 .2rem 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".6rem",
    },
  },
  form: {
    textAlign: "center",
    padding: "1rem 0",
  },
}));

const Registrationform = () => {
  let { isLogin, setLogin, darkMode, setUserInfo } = useContext(ThemeContext);
  let classes = useStyles();
  let [userinput, setUserInput] = useState({
    email: "",
    password: "",
  });

  let handleuserInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUserInput({ ...userinput, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // Fore register new user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userinput.email, userinput.password)
      .then((data) => setLogin(data===''?false:true))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container>
        <form className={classes.form}>
          <TextField
            className={classes.textfields}
            id="email"
            type="email"
            name="email"
            label="Email"
            variant="filled"
            color="primary"
            size="small"
            fullWidth
            onChange={handleuserInput}
          />
          <TextField
            className={classes.textfields}
            id="password"
            type="password"
            name="password"
            label="Password"
            variant="filled"
            size="small"
            fullWidth
            onChange={handleuserInput}
          />
          <Button
            className={classes.formbtn}
            variant="contained"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Registrationform;
