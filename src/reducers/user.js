import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    user:null,
    findUserInput:'',
    isFetching: false,
    error:null
};

export const userReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.FIND_USER_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.FIND_USER_REQUEST_SUCCESS : {
            return {
                ...state,
                user:state.findUserInput.includes('@') ? action.payload.users[0] : action.payload.user,
                isFetching: false
            };
        }

        case types.FIND_USER_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

        case types.CHANGE_INPUT_VALUE_FIND_USER : {
            return {
                ...state,
                findUserInput:action.payload
            };
        }


         case types.DELETE_USER_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.DELETE_USER_REQUEST_SUCCESS : {
            return {
                ...state,
                services:action.payload,
                isFetching: false
            };
        }

        case types.DELETE_USER_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

       

        default:
            return state
    }
};