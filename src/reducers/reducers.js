import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    currentUser:{
        email:"dead1990bb@gmail.com",
        id:1,
        name:"Borys",
        lastName:"Kozhyn",
        age:29,
        phone:"380938807183",
        avatar:"some avatar",
        password:"123456",
        root:false,
        doctor:false,
    },
    doctors:[],
    services:{
        service1:{id:1},
        service2:{id:2},
        service3:{id:3},
        service4:{id:4},
        service5:{id:5},
        service6:{id:6},
        service7:{id:7},
        service8:{id:8},
        service9:{id:9},
    },
    orders:[],
    users:[],
    reviews: [],
    appointment:{
        date:{
            year:0,
            month:0,
            day:0
        },
        price:null,
        time:null,
        doctorId:null,
        spec:null,
        user:null,
        comment:''
    },
    isFetching:false,
    error: null,

};

// -----------------------------------------------------------------------------------------------------------------

export const appReducer = (state = defaultState,action) => {

    switch (action.type) {
// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_APPOINTMENT_DATE : {
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    date:{
                        year: action.payload.split('-')[0],
                        month: action.payload.split('-')[1],
                        day: action.payload.split('-')[2],
                    }
                }
            };
        }

        case types.CHANGE_APPOINTMENT_DOCTOR : {
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    doctorId:action.payload
                }
            };
        }

        case types.CHANGE_APPOINTMENT_TIME : {
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    time:action.payload
                }
            };
        }

        case types.CHANGE_APPOINTMENT_SPEC : {
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    spec:action.payload,
                    id:state.orders[state.orders.length-1].id+1,
                    price:+state.services[action.payload].price
                }
            };
        }

        case types.CHANGE_APPOINTMENT_COMMENT : {
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    comment:action.payload
                }
            };
        }

        case types.CLEAR_APPOINTMENT : {
            return {
                ...state,
                appointment: defaultState.appointment
            };
        }

// -----------------------------------------------------------------------------------------------------------------


        case types.PUT_ORDERS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_ORDERS_REQUEST_SUCCESS : {
            return {
                ...state,
                appointment: defaultState.appointment,
                orders:action.payload,
                isFetching: false
            }
        }

        case types.PUT_ORDERS_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------


        case types.GET_ALL_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_ALL_REQUEST_SUCCESS : {
            return {
                ...state,
                doctors: action.payload.doctors,
                services: action.payload.services,
                orders: action.payload.orders,
                users: action.payload.users,
                reviews: action.payload.reviews,
                isFetching: false
            }
        }

        case types.GET_ALL_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.GET_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                doctors:action.payload,
                isFetching: false
            }
        }

        case types.GET_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.GET_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                services:action.payload,
                isFetching: false
            }
        }

        case types.GET_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
case types.POST_DOCTORS_REQUEST : {
    return {
        ...state,
        isFetching: true
    };
}

case types.POST_DOCTORS_REQUEST_SUCCESS : {
    return {
        ...state,
        isFetching: false
    }
}

case types.POST_DOCTORS_REQUEST_FAIL : {
    return {
        ...state,
        error: action.payload,
        isFetching: false
    }
}

// _______________________________________________________________________________

case types.POST_SERVICES_REQUEST : {
    return {
        ...state,
        isFetching: true
    };
}

case types.POST_SERVICES_REQUEST_SUCCESS : {
    return {
        ...state,
        isFetching: false
    }
}

case types.POST_SERVICES_REQUEST_FAIL : {
    return {
        ...state,
        error: action.payload,
        isFetching: false
    }
}


        default:
            return state
    }
};