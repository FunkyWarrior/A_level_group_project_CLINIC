import * as types from '../actionsTypes/actionsTypes'

import axios from 'axios'

const authRequest = payload => ({
    type: types.AUTH_REQUEST,
    payload
})

const authRequestSuccess = payload => ({
    type: types.AUTH_REQUEST_SUCCESS,
    payload
})

const authRequestFail = payload => ({
    type: types.AUTH_REQUEST_FAIL,
    payload
})

export const auth = payload => {
    return async dispatch => {
        dispatch(authRequest());
        try {
            const { data } = await axios.post("https://api-clinics.herokuapp.com/api/v1/auth/login", payload);
            localStorage.setItem("userId",data.user._id)
            dispatch(authRequestSuccess(data));

           
            
        } catch (error){
            dispatch(authRequestFail(error));
        }
    }
}

const registerRequest = payload => ({
    type:types.REGISTRATION_REQUEST,
    payload
})

const registerRequestSuccess = payload => ({
    type: types.REGISTRATION_REQUEST_SUCCESS,
    payload
})

const registrRequestFail = payload => ({
    type: types.REGISTRATION_REQUEST_FAIL,
    payload
})

export const register = payload => {
    return async dispatch => {
        dispatch(registerRequest());
        try {
            const { data } = await axios.post(
                "https://api-clinics.herokuapp.com/api/v1/auth/register",
                payload
            );
           
            dispatch(registerRequestSuccess(data))
        } catch(error) {
            dispatch(registrRequestFail(error))
        }
    };
};


const getUserRequest = payload => {
    return {
    type: types.GET_USER_REQUEST,
    payload
}}

const getUserRequestSuccess = payload => ({
    type: types.GET_USER_REQUEST_SUCCESS,
    payload
})

const getUserRequestFail = payload => ({
    type: types.GET_USER_REQUEST_FAIL,
    payload
})

export const getUser = () => dispatch => {
    dispatch(getUserRequest());
    return fetch(`https://api-clinics.herokuapp.com/api/v1/users/` + localStorage.getItem('userId'),{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getUserRequestSuccess(res)))
        .catch(err => dispatch(getUserRequestFail(err)));
};

const putUserRequest = payload => ({
    type: types.PUT_USER_REQUEST,
    payload
});

const putUserRequestSuccess = payload => ({
    type: types.PUT_USER_REQUEST_SUCCESS,
    payload
});

const putUserRequestFail = payload => ({
    type: types.PUT_USER_REQUEST_FAIL,
    payload
});

export const putUser = (payload) => dispatch => {
    dispatch(putUserRequest());
    return fetch(` https://api-clinics.herokuapp.com/api/v1/users/` + localStorage.getItem('userId'), {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
    })
        .then(res => res.json())
        .then(res => dispatch(putUserRequestSuccess(res)))
        .catch(err => dispatch(putUserRequestFail(err)));
};

export const changeInputValueUserForm = payload => ({
    type: types.CHANGE_INPUT_VALUE_USER_FORM,
    payload
});

export const setBasicFormValue = payload => ({
    type: types.USER_CHANGE_FORM_INFO,
    payload
})

export const userLogout = payload => ({
    type: types.USER_LOGOUT,
    payload
})
