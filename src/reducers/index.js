import {combineReducers} from "redux";

import {appReducer} from "./reducers";
import {calendarReducer} from "./calendar"
import auth from './auth';
import {appointmentReducer} from "./appointment";



export default combineReducers({
    app:appReducer,
    auth,
    calendar:calendarReducer,
    appointment:appointmentReducer
})