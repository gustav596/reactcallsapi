import { country } from "./Country"
import { customer } from "./Customer"
import { combineReducers } from "redux"

export const reducers = combineReducers({
    customer,
    country
})