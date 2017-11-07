import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { routerReducer } from 'react-router-redux';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import reducers from './reducers';
console.log(reducers);
export default(initialState)=>{
  return createStore(
     combineReducers({
       ...reducers,
       routing: routerReducer,
     }),
    initialState, 
    compose(
      applyMiddleware(
        thunk,
        createLogger({
          duration: true,
          predicate: () => process.env.NODE_ENV !== 'production',
          actionTransformer: action => ({
            ...action,
            type: String(action.type),
          }),
        }),
      ),
    ),
  );
}

