import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import combineReducers from './reducers/index'

export default createStore(combineReducers, applyMiddleware(promiseMiddleware()));