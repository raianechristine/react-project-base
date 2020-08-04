import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./exampleRedux";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    example,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
