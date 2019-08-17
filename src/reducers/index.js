import {combineReducers} from "redux";

import {appReducer} from "./reducers";
import {calendarReducer} from "./calendar"
import auth from './auth';
import {appointmentReducer} from "./appointment";
import {servicesReducer} from "./services";
import orders from './orders'
import {userReducer} from "./user";
import {sheduleReducer} from "./shedule";



export default combineReducers({
    app:appReducer,
    auth,
    calendar:calendarReducer,
    appointment:appointmentReducer,
    services:servicesReducer,
    orders,
    user:userReducer,
    shedule:sheduleReducer
})