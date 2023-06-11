import { combineReducers } from "redux";
import { isTemplateExpression } from "typescript";
import { mainReducer } from "./reducers";


export const rootReducer=combineReducers({
    mainReducer,
})