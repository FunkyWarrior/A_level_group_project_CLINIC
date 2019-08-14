import * as types from "../actionsTypes/actionsTypes";

const URL = "https://api-clinics.herokuapp.com/api/v1/users/";


export const changeFindUserInput = payload => ({
    type:types.CHANGE_INPUT_VALUE_FIND_USER,
    payload
})



const findUserRequest = payload => ({
    type: types.FIND_USER_REQUEST,
    payload
});

const findUserRequestSuccess = payload => ({
    type: types.FIND_USER_REQUEST_SUCCESS,
    payload
});

const findUserRequestFail = payload => ({
    type: types.FIND_USER_REQUEST_FAIL,
    payload
});

export const findUser = (payload) => dispatch => {
    console.log(payload)
    dispatch(findUserRequest());
    return fetch(`${URL}`+payload,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => {
            dispatch(findUserRequestSuccess(res)) 
            console.log(res)
        })
        .catch(err => dispatch(findUserRequestFail(err)));
};



const deleteUserRequest = payload => ({
    type: types.DELETE_DOCTORS_REQUEST,
    payload
});

const deleteUserRequestSuccess = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_SUCCESS,
    payload
});

const deleteUserRequestFail = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_FAIL,
    payload
});

export const deleteUser = (payload) => dispatch => {
    dispatch(deleteUserRequest());
    return fetch(`${URL}${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteUserRequestSuccess(res)))
        .catch(err => dispatch(deleteUserRequestFail(err)));
};


const putUserRequest = payload => ({
    type: types.DELETE_DOCTORS_REQUEST,
    payload
});

const putUserRequestSuccess = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_SUCCESS,
    payload
});

const putUserRequestFail = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_FAIL,
    payload
});

export const putUser = (payload) => dispatch => {
    dispatch(deleteUserRequest());
    return fetch(`${URL}${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteUserRequestSuccess(res)))
        .catch(err => dispatch(deleteUserRequestFail(err)));
};