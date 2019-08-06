import * as types from '../actionsTypes/actionsTypes'

const initialState = {
    user:{},
    isFetching: false,
    error:null,
    successRegister: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.AUTH_REQUEST: {
            return {...state, isFetching: true};
        }

        case types.AUTH_REQUEST_SUCCESS: {
            const { user } = action.payload;
            return {...state, isFetching: false, user: user };
        }

        case types.AUTH_REQUEST_FAIL: {
            return {...state, isFetching: false,error: action.payload.response.data.message };
        }

        case types.REGISTRATION_REQUEST: {
            return { ...state, isFetching: true}
        }

        case types.REGISTRATION_REQUEST_SUCCESS: {
            const { message } = action.payload;
            return { ...state, isFetching: false, successRegister: message }
        }

        case types.REGISTRATION_REQUEST_FAIL: {
            return { ...state, isFetching: false, error: action.payload.response.data.message}
        }

        case types.GET_USER_REQUEST: {
            return { ...state, isFetching: true}
        }

        case types.GET_USER_REQUEST_SUCCESS: {
            return {...state,isFetching: false, user: action.payload.user}
        }
        
        case types.USER_LOGOUT: {
            return { ...state, user: initialState.user}
        }
        
        default:
             return state
    }

}