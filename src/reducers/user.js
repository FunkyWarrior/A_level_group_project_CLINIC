import * as types from '../actionsTypes/actionsTypes'

import {adminChangeUserForm} from "../utils/formFields"

const defaultState = {
    user: null,
    findUserInput: '',
    changeUserForm: adminChangeUserForm,
    isFetching: false,
    error: null
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.FIND_USER_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.FIND_USER_REQUEST_SUCCESS : {
            const data = state.findUserInput.includes('@') ? action.payload.users[0] : action.payload.user;
            state.changeUserForm.map(el => console.log(Object.keys(data).find(item => item === el.name)));
            return {
                ...state,
                user: data,
                changeUserForm: state.changeUserForm.map(el => Object.keys(data).find(item => item === el.name) ? el.type === 'radio' ?
                    {
                        ...el,
                        checked: data[`${el.name}`] === el.value
                    } :
                    {
                    ...el,
                    value: data[`${el.name}`]
                    } :
                    el
                ),
                error: action.payload.message,
                isFetching: false
            };
        }

        case types.FIND_USER_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

        case types.CHANGE_INPUT_VALUE_FIND_USER : {
            return {
                ...state,
                findUserInput: action.payload
            };
        }

        case types.CHANGE_INPUT_VALUE_USER_FORM : {
            console.log(action.payload.target);
            const data = action.payload.target;
            return {
                ...state,
                changeUserForm: state.changeUserForm.map(el => el.name === data.name ? el.type === 'radio' ?
                    {
                        ...el,
                        checked: !el.checked
                    } :
                    {
                        ...el,
                        value: data.value
                    } :
                    el
                ),
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
                services: action.payload,
                isFetching: false
            };
        }

        case types.DELETE_USER_REQUEST_FAIL : {
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