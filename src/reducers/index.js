import {combineReducers} from "redux";

import {appReducer} from "./reducers";
import auth from './auth';



export default combineReducers({
    app:appReducer,
    auth,
})