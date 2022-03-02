import React,{useEffect} from "react";
import { Typography, Button } from "@material-ui/core";
import { increment, decrement, login, logout,increment_5,decrement_5,empty } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  let counter = useSelector((state) => state.counterReducer);
  let loginStatus = useSelector((state) => state.isLoggedIn);

  let dispatch = useDispatch();

  useEffect(()=>{
    console.log('hello')
  },[counter])

  return (
    <>
      <Typography variant="h4">counter:{counter}</Typography>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(increment_5())}
      >
       +5
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(decrement_5())}
      >
        -5
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(empty())}
      >
        Empty
      </Button>
      <Typography variant="h5" component='h1'>
        status: <Typography variant="h6" component="span">{loginStatus ? "LOGIN" : "LOGOUT"}</Typography>{" "}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(login())}
      >
        login
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        onClick={() => dispatch(logout())}
      >
        logout
      </Button>
    </>
  );
};

export default App;
