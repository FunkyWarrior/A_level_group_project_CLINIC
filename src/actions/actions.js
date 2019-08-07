import * as types from '../actionsTypes/actionsTypes'

const URL = "https://api-clinics.herokuapp.com/api/v1/";


// -----------------------------------------------------------------------------------------------------------------

export const changeInputValueDoctorForm = payload => ({
    type: types.CHANGE_INPUT_VALUE_DOCTOR_FORM,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeInputValueServiceForm = payload => ({
    type: types.CHANGE_INPUT_VALUE_SERVICE_FORM,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeSelectedDoctorId = payload => ({
    type: types.CHANGE_SELECTED_DOCTOR_ID,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeSelectedServiceId = payload => ({
    type: types.CHANGE_SELECTED_SERVICE_ID,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setSheduleDoctor = payload => ({
    type: types.CHANGE_SHEDULE_DOCTOR,
    payload
});

// -----------------------------------------------------------------------------------------------------------------
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
    // console.log('get')
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
        .then(res => dispatch(postSheduleSuccess(res))).then(dispatch(getDoctors()))
        .catch(err => dispatch(postSheduleFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
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

const putServicesRequest = payload => ({
    type: types.PUT_SERVICES_REQUEST,
    payload
});

const putServicesRequestSuccess = payload => ({
    type: types.PUT_SERVICES_REQUEST_SUCCESS,
    payload
});

const putServicesRequestFail = payload => ({
    type: types.PUT_SERVICES_REQUEST_FAIL,
    payload
});

export const putServices = (payload) => dispatch => {
    dispatch(putServicesRequest());
    return fetch(`${URL}services/${payload.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
    })
        .then(res => res.json())
        .then(res => dispatch(putServicesRequestSuccess(res)))
        .catch(err => dispatch(putServicesRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

const deleteServicesRequest = payload => ({
    type: types.DELETE_DOCTORS_REQUEST,
    payload
});

const deleteServicesRequestSuccess = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_SUCCESS,
    payload
});

const deleteServicesRequestFail = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_FAIL,
    payload
});

export const deleteServices = (payload) => dispatch => {
    dispatch(deleteServicesRequest());
    return fetch(`${URL}services/${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteServicesRequestSuccess(res)))
        .catch(err => dispatch(deleteServicesRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const deleteDoctorsRequest = payload => ({
    type: types.DELETE_DOCTORS_REQUEST,
    payload
});

const deleteDoctorsRequestSuccess = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_SUCCESS,
    payload
});

const deleteDoctorsRequestFail = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_FAIL,
    payload
});

export const deleteDoctors = (payload) => dispatch => {
    dispatch(deleteDoctorsRequest());
    return fetch(`${URL}doctors/${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteDoctorsRequestSuccess(res)))
        .catch(err => dispatch(deleteDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------