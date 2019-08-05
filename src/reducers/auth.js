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
            const updatedUser = {...user, role: user.doctor ? "Doctor" : user.role ? "Admin" : "User"} 
            console.log("user", updatedUser)
            return {...state, isFetching: false, user: updatedUser };
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
        
        default:
             return state
    }

}