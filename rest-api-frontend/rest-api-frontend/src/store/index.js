import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import listReducer from "../reducer";

const store = createStore(
  listReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
