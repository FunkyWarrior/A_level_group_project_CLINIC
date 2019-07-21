import * as types from '../actionsTypes/actionsTypes'

const URL = "https://api-clinics.herokuapp.com/api/v1/";


// -----------------------------------------------------------------------------------------------------------------

export const changeInputDoctorForm = payload => ({
    type: types.CHANGE_INPUT_VALUE_DOCTOR_FORM,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeSelectedDoctor = payload => ({
    type: types.CHANGE_SELECTED_DOCTOR,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentShedule = payload => ({
    type: types.CHANGE_APPOINTMENT_SHEDULE,
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

export const setSheduleDoctor = payload => ({
    type: types.CHANGE_SHEDULE_DOCTOR,
    payload
});

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
    return fetch(`${URL}doctors`,{
        credentials:"include"
    })
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
    return fetch(`${URL}services`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
const postDoctorsRequest = payload => ({
    type: types.POST_DOCTORS_REQUEST,
    payload
});

const postDoctorsRequestSuccess = payload => ({
    type: types.POST_DOCTORS_REQUEST_SUCCESS,
    payload
});

const postDoctorsRequestFail = payload => ({
    type: types.POST_DOCTORS_REQUEST_FAIL,
    payload
});

export const postDoctors = (payload) => dispatch => {
    dispatch(postDoctorsRequest());
    return fetch(`${URL}doctors`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(postDoctorsRequestSuccess(res)))
        .catch(err => dispatch(postDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const postServicesRequest = payload => ({
    type: types.POST_SERVICES_REQUEST,
    payload
});

const postServicesRequestSuccess = payload => ({
    type: types.POST_SERVICES_REQUEST_SUCCESS,
    payload
});

const postServicesRequestFail = payload => ({
    type: types.POST_SERVICES_REQUEST_FAIL,
    payload
});

export const postServices = (payload) => dispatch => {
    dispatch(postServicesRequest());
    return fetch(`${URL}services`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res =>  dispatch(postServicesRequestSuccess(res)))
        .catch(err => dispatch(postServicesRequestFail(err)))
};

// -----------------------------------------------------------------------------------------------------------------

const postSheduleRequest = payload => ({
    type: types.POST_SHEDULE_REQUEST,
    payload
});

const postSheduleSuccess = payload => ({
    type: types.POST_SHEDULE_REQUEST_SUCCESS,
    payload
});

const postSheduleFail = payload => ({
    type: types.POST_SHEDULE_REQUEST_FAIL,
    payload
});

export const postShedule = (payload) => dispatch => {
    dispatch(postSheduleRequest());
    return fetch(`${URL}shedule`, {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(postSheduleSuccess(res)))
        .catch(err => dispatch(postSheduleFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const postOrdersRequest = payload => ({
    type: types.POST_ORDERS_REQUEST,
    payload
});

const postOrdersSuccess = payload => ({
    type: types.POST_ORDERS_REQUEST_SUCCESS,
    payload
});

const postOrdersFail = payload => ({
    type: types.POST_ORDERS_REQUEST_FAIL,
    payload
});

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
        .catch(err => dispatch(postOrdersFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const putDoctorsRequest = payload => ({
    type: types.PUT_DOCTORS_REQUEST,
    payload
});

const putDoctorsRequestSuccess = payload => ({
    type: types.PUT_DOCTORS_REQUEST_SUCCESS,
    payload
});

const putDoctorsRequestFail = payload => ({
    type: types.PUT_DOCTORS_REQUEST_FAIL,
    payload
});

export const putDoctors = (payload) => dispatch => {
    dispatch(putDoctorsRequest());
    return fetch(`${URL}doctors/${payload.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
    })
        .then(res => res.json())
        .then(res => dispatch(putDoctorsRequestSuccess(res)))
        .catch(err => dispatch(putDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------