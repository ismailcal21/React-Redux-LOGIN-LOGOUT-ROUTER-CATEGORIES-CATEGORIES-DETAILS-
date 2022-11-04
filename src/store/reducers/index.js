import { combineReducers } from "redux";
import appDataReducer from "./appDataReducer";
import authReducer from "./authReducer";

const containerReducer = {
  authState: authReducer,
  appDataState: appDataReducer,
};

const reducers = combineReducers(containerReducer);

export default reducers;
