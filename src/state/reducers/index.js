import { combineReducers } from "redux";
import { ApiReducer } from "./ApiReducer";



const rootReducers= combineReducers({
    ApiData:ApiReducer
});


export default rootReducers;