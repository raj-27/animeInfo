import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './index.css';
import { store } from "./store";
import { Provider } from "react-redux";

store.subscribe(()=>console.log(store.getState()));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
