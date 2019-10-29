import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth-reducers";

export default combineReducers({
  alert,
  auth
});
