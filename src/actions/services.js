import * as types from "../actionsTypes/actionsTypes";

const URL = "https://api-clinics.herokuapp.com/api/v1/";

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



const getCategoriesRequest = payload => ({
    type: types.GET_CATEGORIES_REQUEST,
    payload
});

const getCategoriesRequestSuccess = payload => ({
    type: types.GET_CATEGORIES_REQUEST_SUCCESS,
    payload
});

const getCategoriesRequestFail = payload => ({
    type: types.GET_CATEGORIES_REQUEST_FAIL,
    payload
});

export const getCategories = () => dispatch => {
    dispatch(getCategoriesRequest());
    return fetch(`${URL}category`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getCategoriesRequestSuccess(res)))
        .catch(err => dispatch(getCategoriesRequestFail(err)));
};