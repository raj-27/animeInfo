import { createStore } from "redux";
import allReducer from "./reducers/allReducer";

export let store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
