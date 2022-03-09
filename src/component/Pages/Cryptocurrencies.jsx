import React, { useEffect, useState,useRef } from "react";
import Cryptocurrenncy from "./Cryptocurrency";
import { Box, Container, TextField, makeStyles } from "@material-ui/core";
import {useSelector,useDispatch} from "react-redux"
import {search} from "../../reducer/cryptoSlice"
import {fetchCrypto} from "../../reducer/cryptoSlice"
let useStyle = makeStyles((theme)=>({ 
  input:{
    width:"95%",
    height:"2.5rem",
    padding: "0 0 0 1rem",
    [theme.breakpoints.down("xs")]:{
      padding: "0 0 0 .6rem",
      height: "2rem"
    }
  }
}));

const Cryptocurrencies = () => {
  let classes=useStyle();
  let [searchCrypto,setSearchCrypto]=useState('');
  let inputRef=useRef('');
  let dispatch=useDispatch();

  
  useEffect(()=>{
    dispatch(fetchCrypto());
  },[searchCrypto])
  
  let filtercrypto=()=>{
    dispatch(search(inputRef.current.value))
 }

  return (
    <>
      <Box sx={{ padding: "16px 0 " }}>
        <Container align="center" justifyContent="center" alignItems="center">
          <input ref={inputRef} className={classes.input}  onChange={filtercrypto} placeholder="Search Crypto"/>
        </Container>
      </Box>
      <Cryptocurrenncy count={99} />
    </>
  );
};

export default Cryptocurrencies;
