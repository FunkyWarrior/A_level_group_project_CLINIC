import {combineReducers} from "redux";

import {appReducer} from "./reducers";
import {calendarReducer} from "./calendar"
import auth from './auth';
import {appointmentReducer} from "./appointment";
import {servicesReducer} from "./services";
import {userReducer} from "./user";



export default combineReducers({
    app:appReducer,
    auth,
    calendar:calendarReducer,
    appointment:appointmentReducer,
    services:servicesReducer,
    user:userReducer
})