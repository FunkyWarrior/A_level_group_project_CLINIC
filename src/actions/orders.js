import * as types from "../actionsTypes/actionsTypes";

const URL = "https://api-clinics.herokuapp.com/api/v1/orders";


export const changeInputFindOrder = payload => ({
    type:types.CHANGE_INPUT_VALUE_FIND_ORDER,
    payload
});

export const findOrdersArray = payload => ({
    type:types.FIND_ORDERS_ARRAY,
    payload
});

export const changeInputValueOrderForm = payload => ({
    type:types.CHANGE_INPUT_VALUE_ORDER_FORM,
    payload
});


const getOrdersRequest = payload => ({
    type: types.GET_ORDERS_REQUEST,
    payload
});

const getOrdersSuccess = payload => ({
    type: types.GET_ORDERS_REQUEST_SUCCESS,
    payload
});

const getOrdersFail = payload => ({
    type: types.GET_ORDERS_REQUEST_FAIL,
    payload
});

export const getOrders = (payload) => dispatch => {
    dispatch(getOrdersRequest());
    return fetch(`${URL}`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => {
            dispatch(getOrdersSuccess({res:res,data:payload}));
        })
        .catch(err => dispatch(getOrdersFail(err)));
};



