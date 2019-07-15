export const GET_DOCTORS_REQUEST = "GET_DOCTORS_REQUEST";
export const GET_DOCTORS_REQUEST_SUCCESS = "GET_DOCTORS_REQUEST_SUCCESS";
export const GET_DOCTORS_REQUEST_FAIL = "GET_DOCTORS_REQUEST_FAIL";

export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_REQUEST_SUCCESS = "GET_SERVICES_REQUEST_SUCCESS";
export const GET_SERVICES_REQUEST_FAIL = "GET_SERVICES_REQUEST_FAIL";

export const POST_DOCTORS_REQUEST = "POST_DOCTORS_REQUEST";
export const POST_DOCTORS_REQUEST_SUCCESS = "POST_DOCTORS_REQUEST_SUCCESS";
export const POST_DOCTORS_REQUEST_FAIL = "POST_DOCTORS_REQUEST_FAIL";

const URL = "https://team-app-28f4a.firebaseio.com/";
// https://api-clinics.herokuapp.com/api/v1/services"

// -----------------------------------------------------------------------------------------------------------------

export const getDoctorsRequest = payload => ({
    type: GET_DOCTORS_REQUEST,
    payload
});

const getDoctorsRequestSuccess = payload => ({
    type: GET_DOCTORS_REQUEST_SUCCESS,
    payload
});

const getDoctorsRequestFail = payload => ({
    type: GET_DOCTORS_REQUEST_FAIL,
    payload
});

export const getDoctors = () => dispatch => {
    dispatch(getDoctorsRequest());
    return fetch(`${URL}doctors.json`, {
        method: "GET",
        // credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(getDoctorsRequestSuccess(res)))
        .catch(err => dispatch(getDoctorsRequestFail(err)));
};
// _____________________________________________________________________________________

export const postDoctorsRequest = payload => ({
    type: POST_DOCTORS_REQUEST,
    payload
});

const postDoctorsRequestSuccess = payload => ({
    type: POST_DOCTORS_REQUEST_SUCCESS,
    payload
});

const postDoctorsRequestFail = payload => ({
    type: POST_DOCTORS_REQUEST_FAIL,
    payload
});

export const postDoctors = (payload) => dispatch => {
    console.log(payload)
    dispatch(postDoctorsRequest());
    return fetch("https://api-clinics.herokuapp.com/api/v1/doctors", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res =>console.log(res))
        .catch(err => dispatch(postDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
const getServicesRequest = payload => ({
    type: GET_SERVICES_REQUEST,
    payload
});

const getServicesRequestSuccess = payload => ({
    type: GET_SERVICES_REQUEST_SUCCESS,
    payload
});

const getServicesRequestFail = payload => ({
    type: GET_SERVICES_REQUEST_FAIL,
    payload
});

export const getServices = () => dispatch => {
    dispatch(getServicesRequest());
    return fetch(`${URL}services.json`, {
        method: "GET",
        // credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};


