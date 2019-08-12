import * as types from "../actionsTypes/actionsTypes";

const URL = "https://api-clinics.herokuapp.com/api/v1/";

export const setAppointmentShedule = payload => ({
    type: types.CHANGE_APPOINTMENT_SHEDULE,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentDoctor = payload => ({
    type: types.CHANGE_APPOINTMENT_DOCTOR,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentTime = payload => ({
    type: types.CHANGE_APPOINTMENT_TIME,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentSpec = payload => ({
    type: types.CHANGE_APPOINTMENT_SPEC,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentComment = payload => ({
    type: types.CHANGE_APPOINTMENT_COMMENT,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const clearAppointment = payload => {
    localStorage.removeItem('appointment');
     return  {
         type: types.CLEAR_APPOINTMENT,
         payload
     }
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

const postOrdersRequest = payload => ({
    type: types.POST_ORDERS_REQUEST,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postOrdersSuccess = payload => ({
    type: types.POST_ORDERS_REQUEST_SUCCESS,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postOrdersFail = payload => ({
    type: types.POST_ORDERS_REQUEST_FAIL,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const postOrders = (payload) => dispatch => {
    dispatch(postOrdersRequest());
    return fetch(`${URL}orders`, {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(postOrdersSuccess(res)))
        .then(dispatch(clearAppointment()))
        .catch(err => dispatch(postOrdersFail(err)));
};