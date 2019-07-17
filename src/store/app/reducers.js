import * as types from './actionTypes'

const defaultState = {
    doctors:[  ],
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
    isFetching:false,
    error: null,

};

// -----------------------------------------------------------------------------------------------------------------

export const appReducer = (state = defaultState,action) => {

    switch (action.type) {
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

// _______________________________________________________________________________

        default:
            return state
    }
};