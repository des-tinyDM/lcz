import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// Reducer Imports
import userReducer from "./userReducer";
import friendReducer from "./friendReducer";

const store = createStore(
  combineReducers({
    userReducer,
    friendReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
