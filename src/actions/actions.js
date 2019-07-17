import * as types from '../actionsTypes/actionsTypes'

const URL = "https://team-app-28f4a.firebaseio.com/";

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentDate = payload => ({
    type: types.CHANGE_APPOINTMENT_DATE,
    payload
});

export const setAppointmentDoctor = payload => ({
    type: types.CHANGE_APPOINTMENT_DOCTOR,
    payload
});

export const setAppointmentTime = payload => ({
    type: types.CHANGE_APPOINTMENT_TIME,
    payload
});

export const setAppointmentSpec = payload => ({
    type: types.CHANGE_APPOINTMENT_SPEC,
    payload
});

export const setAppointmentComment = payload => ({
    type: types.CHANGE_APPOINTMENT_COMMENT,
    payload
});

export const clearAppointment = payload => ({
    type: types.CLEAR_APPOINTMENT,
    payload
});

// -----------------------------------------------------------------------------------------------------------------


const putOrdersRequest = payload => ({
    type: types.PUT_ORDERS_REQUEST,
    payload
});

const putOrdersSuccess = payload => ({
    type: types.PUT_ORDERS_REQUEST_SUCCESS,
    payload
});

const putOrdersFail = payload => ({
    type: types.PUT_ORDERS_REQUEST_FAIL,
    payload
});

export const putOrders = (payload) => dispatch => {
    dispatch(putOrdersRequest());
    return fetch(`${URL}/orders.json`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(putOrdersSuccess(res)))
        .catch(err => dispatch(putOrdersFail(err)));

};


// -----------------------------------------------------------------------------------------------------------------

const getAllRequest = payload => ({
    type: types.GET_ALL_REQUEST,
    payload
});

const getAllRequestSuccess = payload => ({
    type: types.GET_ALL_REQUEST_SUCCESS,
    payload
});

const getAllRequestFail = payload => ({
    type: types.GET_ALL_REQUEST_FAIL,
    payload
});

export const getAll = () => dispatch => {
    dispatch(getAllRequest());
    return fetch(`${URL}.json`)
        .then(res => res.json())
        .then(res => dispatch(getAllRequestSuccess(res)))
        .catch(err => dispatch(getAllRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const getDoctorsRequest = payload => ({
    type: types.GET_DOCTORS_REQUEST,
    payload
});

const getDoctorsRequestSuccess = payload => ({
    type: types.GET_DOCTORS_REQUEST_SUCCESS,
    payload
});

const getDoctorsRequestFail = payload => ({
    type: types.GET_DOCTORS_REQUEST_FAIL,
    payload
});

export const getDoctors = () => dispatch => {
    dispatch(getDoctorsRequest());
    return fetch(`${URL}doctors.json`)
        .then(res => res.json())
        .then(res => dispatch(getDoctorsRequestSuccess(res)))
        .catch(err => dispatch(getDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
const getServicesRequest = payload => ({
    type: types.GET_SERVICES_REQUEST,
    payload
});

const getServicesRequestSuccess = payload => ({
    type: types.GET_SERVICES_REQUEST_SUCCESS,
    payload
});

const getServicesRequestFail = payload => ({
    type: types.GET_SERVICES_REQUEST_FAIL,
    payload
});

export const getServices = () => dispatch => {
    dispatch(getServicesRequest());
    return fetch(`${URL}services.json`)
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};