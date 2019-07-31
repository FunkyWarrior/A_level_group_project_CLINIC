import {combineReducers} from "redux";

import {appReducer} from "./reducers";
import {calendarReducer} from "./calendar"
import auth from './auth';



export default combineReducers({
    app:appReducer,
    auth,
    calendar:calendarReducer
})