import { combineReducers } from "redux";
import isLoggedIn from "./isLoggedIn"
import counterReducer from "./counterReducer"
let allReducer = combineReducers({counterReducer,isLoggedIn})
export default allReducer;