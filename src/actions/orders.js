import * as types from '../actionsTypes/actionsTypes'

const getOrdersRequest = payload => {
    return {
    type: types.GET_ORDERS_REQUEST,
    payload
}}

const getOrdersRequestSuccess = payload => (
    {
    type: types.GET_ORDERS_REQUEST_SUCCESS,
    payload
})

const getOrdersRequestFail = payload => ({
    type: types.GET_ORDERS_REQUEST_FAIL,
    payload
})

export const getUserOrders = payload => ({
    type: types.USER_ORDERS,
    payload
})

export const getOrders = (payload) => dispatch => {
    dispatch(getOrdersRequest());
    return fetch("https://api-clinics.herokuapp.com/api/v1/orders",{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getOrdersRequestSuccess(res)))
        // .then(res => dispatch(getUserOrders({ data:res, userId: payload})))
        .catch(err => dispatch(getOrdersRequestFail(err)));
};
