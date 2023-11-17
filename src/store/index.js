import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import products from "./products/reducer";

const store = createStore(
  combineReducers({
    products
  }),
  applyMiddleware(logger, thunk)
);

export default store;
