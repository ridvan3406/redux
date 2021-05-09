import {combineReducers} from 'redux'
import userReducer from './userReducers'
import productReducer from './productReducer'
export const rootReducer = combineReducers({ userReducer,productReducer})