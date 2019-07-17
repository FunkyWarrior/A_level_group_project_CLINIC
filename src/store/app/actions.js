// import axios from "axios";
import * as types from "./actionTypes";



const URL = "https://team-app-28f4a.firebaseio.com/";
// https://api-clinics.herokuapp.com/api/v1/services"

// -----------------------------------------------------------------------------------------------------------------

export const getDoctorsRequest = payload => ({
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
    return fetch(`${URL}doctors.json`, {
        method: "GET",
        // credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(getDoctorsRequestSuccess(res)))
        .catch(err => dispatch(getDoctorsRequestFail(err)));
};
// _____________________________________________________________________________________

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
    return fetch(`${URL}services.json`, {
        method: "GET",
        // credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};


// _____________________________________________________________________________________
export const postDoctorsRequest = payload => ({
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
        .then(res => dispatch(postDoctorsRequestSuccess(res)))
        .catch(err => dispatch(postDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

export const postServicesRequest = payload => ({
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
    // console.log(payload)
    dispatch(postServicesRequest());
    return fetch("https://api-clinics.herokuapp.com/api/v1/services/:id ", {
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

// _____________________________________________________________

