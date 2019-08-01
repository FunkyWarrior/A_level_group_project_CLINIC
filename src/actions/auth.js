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
            localStorage.setItem("userId",JSON.stringify(data.user._id))
            console.log('data',data)
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