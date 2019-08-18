import * as types from '../actionsTypes/actionsTypes'

const initialState = {
    orders:[],
    isFetching: false,
    error:null,
    userOrders: [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.GET_ORDERS_REQUEST: {
            return {...state, isFetching: true};
        }

        case types.GET_ORDERS_REQUEST_SUCCESS: { 
            return {...state, isFetching: false, orders: action.payload.orders};
        }

        case types.USER_ORDERS: {
            // console.log(action.payload)
            // console.log(state.orders)
            const userOrdersArray = state.orders.filter(userOrder => userOrder.user === action.payload._id)
            console.log('userOrders',userOrdersArray)
            return  {...state, isFetching: false,}
        }

        case types.GET_ORDERS_REQUEST_FAIL: {
            return {...state, isFetching: false}
            // return {...state, isFetching: false,error: action.payload.response.data.message };
        }

        default:
             return state
    }
}