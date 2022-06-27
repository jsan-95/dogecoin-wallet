import {combineReducers, configureStore } from "@reduxjs/toolkit" 
import AppReducer from "./AppReducer"
import TransactionReducer from './TransactionReducer';


export const store = configureStore({
    reducer: combineReducers({
        transactionReducer: TransactionReducer,
        app: AppReducer
    })
});