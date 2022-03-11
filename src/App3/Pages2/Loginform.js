import { authentication } from "../.././firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { ThemeContext } from "../Component 2/ThemeContext";
import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
let useStyle = makeStyles((theme) => ({
  textfields: {
    margin: ".4rem 0 ",
    backgroundColor: "#fefefe",
    borderRadius: ".3rem",
  },
  hr: {
    backgroundColor: "#f3f3f3",
  },
  form: {
    textAlign: "center",
  },
  divider: {
    backgroundColor: "#f3f3f3",
    margin: "1rem 0",
  },
  authlinkimg: {
    width: "30%",
    textAlign: "center",
  },
  authinimg: {
    width: "1.5rem",
    color: "#fefefe",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "1.35rem",
    },
  },
  authlinktext: {
    width: "70%",
    color: "#fefefe",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
  formbtn: {
    margin: "1rem 0 .2rem 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".6rem",
    },
  },
  googleauth: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,.7)",
    opacity: ".7",
    padding: ".5rem 1rem",
    borderRadius: "3rem",
    transition: "all .4s",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,1)",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const Loginform = () => {
  let { isLogin, setLogin, darkMode, setUserInfo } = useContext(ThemeContext);
  let classes = useStyle();
  let [userinput, setUserInput] = useState({
    email: "",
    password: "",
  });

  let loginWithGoogle = () => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then((result) => {
      setLogin(result.user.emailVerified);
    });
  };

  let handleuserInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUserInput({ ...userinput, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userinput);
     const auth = getAuth();
    // login 
    signInWithEmailAndPassword(auth, userinput.email, userinput.password)
    .then((data) => setLogin(data===''?false:true))
    .catch((err) => console.log(err))
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
            Login
          </Button>
        </form>
        <Divider className={classes.divider} />
        <Button
          className={classes.googleauth}
          fullWidth
          onClick={loginWithGoogle}
        >
          <Box className={classes.authlinkimg}>
            <img
              src="./images/google.svg"
              className={classes.authinimg}
              alt=""
              srcSet=""
            />
          </Box>
          <Typography className={classes.authlinktext}>
            Login With Google
          </Typography>
        </Button>
      </Container>
    </>
  );
};

export default Loginform;
