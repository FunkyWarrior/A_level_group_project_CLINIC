import * as types from '../actionsTypes/actionsTypes'

import {changeUserForm} from '../utils/formFields'

const initialState = {
    user:{},
    isFetching: false,
    error:null,
    successRegister: null,
    changeUserForm: changeUserForm
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

        case types.CHANGE_INPUT_VALUE_USER_FORM : {
            console.log(action.payload)
            return { ...state,
                changeUserForm: state.changeUserForm.map(el => el.id === +action.payload.target.id ? {
                ...el,
                
                value: action.payload.target.value
            } : el)
        }
        }
        case types.PUT_USER_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.USER_CHANGE_FORM_INFO: {
            const {data} = action.payload
            console.log(data)
          
           
            return {
                ...state,
                // changeUserForm:state.changeUserForm.map(el => 
                //     el.name === data.name  ?  {                   
                //          ...el,                   
                //          value:data.value
                //      } :
                //      el)

            }
        }

        case types.PUT_USER_REQUEST_SUCCESS : {
            return {
                ...state,
                changeUserForm:changeUserForm,
                isFetching: false
            }
        }

        case types.PUT_USER_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }
        
        case types.USER_LOGOUT: {
            return { ...state, user: initialState.user}
        }
        
        default:
             return state
    }

}