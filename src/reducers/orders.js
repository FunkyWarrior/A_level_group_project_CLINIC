import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    orders:[],
    ordersArray:[],
    findOrderInput:'',
    userOrdersArray:[],
    error:null,
    isFetching:false,
    searching:false,
};

export const ordersReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.CHANGE_INPUT_VALUE_FIND_ORDER : {
            return {
                ...state,
                findOrderInput:action.payload
            };
        }

        case types.FIND_ORDERS_ARRAY : {
            if(!isNaN(+state.findOrderInput)){
                return {
                    ...state,
                    ordersArray:state.orders.filter(el => el.orderNumber === +state.findOrderInput),
                    searching:true,
                }
            }
            if(state.findOrderInput.includes('@')){
                return {
                    ...state,
                    ordersArray:state.orders.filter(el => el.user.email === state.findOrderInput),
                    searching:true,
                }
            }
            return {
                ...state,
                searching:true,
            };
        }

        case types.CHANGE_INPUT_VALUE_ORDER_FORM : {
            return {
                ...state,
            };
        }


        case types.GET_ORDERS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_ORDERS_REQUEST_SUCCESS : {
            const res = action.payload.res.orders;
            const doctors = action.payload.data.doctors;
            const services = action.payload.data.services;
            const users = action.payload.data.users;
            // eslint-disable-next-line array-callback-return
            res.map(el => {
                if(doctors.find(doc => doc._id === el.doctor))el.doctor = doctors.find(doc => doc._id === el.doctor);
                if(services.find(spec => spec._id === el.spec))el.spec = services.find(spec => spec._id === el.spec);
                if(users.find(us => us._id === el.user))el.user = users.find(us => us._id === el.user)
            });
            return {
                ...state,
                orders: res
            };
        }

        case types.GET_ORDERS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

        case types.USER_ORDERS: {
            //  console.log(action.payload)
            // console.log(state.orders)
             const userOrderArray = state.orders.filter(userOrder => userOrder.user === action.payload._id)
            //  console.log('userOrders',userOrderArray)
             return  {
                 ...state,
                 userOrdersArray:userOrderArray,
                isFetching: false,}
        }
                  


        default:
            return state
    }
};
