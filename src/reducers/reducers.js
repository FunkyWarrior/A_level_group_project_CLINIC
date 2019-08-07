import * as types from '../actionsTypes/actionsTypes'

import {postNewDoctorForm,postNewServiceForm} from '../utils/formFields'

const defaultState = {
    user:localStorage.getItem('id') ? localStorage.getItem('id') : null,
    doctors:[],
    services:[],
    servicesArray:{
        'Хирургия':[],
        'Детская стоматология':[],
        'Ортодонтия':[],
        'Терапия':[],
        'Имплантология': [],
        'Эндодонтия':[]
    },

    orders:[],
    users:[],
    reviews: [],

    postNewShedule:{
        data:null,
        doctor:null
    },

    postNewDoctor:postNewDoctorForm,
    postNewService:postNewServiceForm,

    changeDoctorId:null,
    changeServiceId:null,

    isFetching:false,
    error: null,

};

// -----------------------------------------------------------------------------------------------------------------

export const appReducer = (state = defaultState,action) => {

    switch (action.type) {

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_INPUT_VALUE_DOCTOR_FORM : {
            return {
                ...state,
                postNewDoctor: state.postNewDoctor.map(el => el.id === +action.payload.target.id ? {
                    ...el,
                    value:el.name === 'speciality' ? JSON.parse(action.payload.target.value) : action.payload.target.value
                } : el)
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_INPUT_VALUE_SERVICE_FORM : {
            return {
                ...state,
                postNewService: state.postNewService.map(el => el.id === +action.payload.target.id ? {
                    ...el,
                    value:action.payload.target.value
                } : el)
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SELECTED_DOCTOR_ID : {
            let doctor = state.doctors.find(el => el.name === action.payload)
            let result = Object.keys(doctor).map(key => {
                return [key, doctor[key]];
            });
            return {
                ...state,
                changeDoctorId: state.doctors.find(el => el.name === action.payload)._id,
                postNewDoctor:state.postNewDoctor.map(el => result.find(item => item[0] === el.name) ? {
                    ...el,
                    value:result.find(item => item[0] === el.name)[1]
                } : el)
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SELECTED_SERVICE_ID : {
            let service = state.services.find(el => el.name === action.payload)
            let result = Object.keys(service).map(key => {
                return [key, service[key]];
            });
            return {
                ...state,
                changeServiceId: service._id,
                postNewService: state.postNewService.map(el => result.find(item => item[0] === el.name) ? {
                    ...el,
                    value:result.find(item => item[0] === el.name)[1]
                } : el)
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SHEDULE_DOCTOR : {
            let doctor = state.doctors.find(el=>el.name === action.payload);
            let array = [[],[],[],[],[],[],[],[],[],[],[],[]];
            // eslint-disable-next-line array-callback-return
            doctor.shedule.map(el => {
                array[new Date(el.data).getMonth()].push(el)
            });
            return {
                ...state,
                postNewShedule: {
                    ...state.postNewShedule,
                    doctor:doctor._id
                },
                sheduleMonthArray: array
            };
        }

// -----------------------------------------------------------------------------------------------------------------
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
                doctors:action.payload.doctors,
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
            action.payload.services.sort((a,b) => {
                if (a.name.slice(0,1) < b.name.slice(0,1)) {return -1;}
                if(a.name.slice(0,1) > b.name.slice(0,1)) {return 1;}
                return 0
            });
                action.payload.services.map(el => {
                    switch (el.description){
                        case "Ортодонтия" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Ортодонтия':state.servicesArray['Ортодонтия'].push(el)
                                }
                            }
                        }
                        case "Детская стоматология" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Детская стоматология':state.servicesArray['Детская стоматология'].push(el)
                                }
                            }
                        }
                        case "Протезирование" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Имплантология':state.servicesArray['Имплантология'].push(el)
                                }
                            }
                        }
                        case "Имплантация" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Имплантология':state.servicesArray['Имплантология'].push(el)
                                }
                            }
                        }
                        case "Хирургия" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Хирургия':state.servicesArray['Хирургия'].push(el)
                                }
                            }
                        }
                        case "Эндодонтическое лечение с помощью микроскопа" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Эндодонтия':state.servicesArray['Эндодонтия'].push(el)
                                }
                            }
                        }
                        case "Лечение пародонтита" : {
                            return {
                                ...state,
                                servicesArray:{
                                    ...state.servicesArray,
                                    'Терапия':state.servicesArray['Терапия'].push(el)
                                }
                            }
                        }
                        default: return el
                    }
                });

            return {
                ...state,
                services:action.payload.services,
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
                postNewDoctor:postNewDoctorForm,
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

// -----------------------------------------------------------------------------------------------------------------

        case types.POST_SHEDULE_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.POST_SHEDULE_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewShedule:{
                    ...state.postNewShedule,
                    data:null,
                },
                isFetching: false
            }
        }

        case types.POST_SHEDULE_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------------------------

        case types.POST_ORDERS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.POST_ORDERS_REQUEST_SUCCESS : {
            return {
                ...state,
                appointment: defaultState.appointment,
                orders:action.payload,
                isFetching: false
            }
        }

        case types.POST_ORDERS_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        case types.PUT_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewDoctor:postNewDoctorForm,
                changeId:null,
                isFetching: false
            }
        }

        case types.PUT_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.PUT_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewService:postNewServiceForm,
                changeId:null,
                isFetching: false
            }
        }

        case types.PUT_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        case types.DELETE_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.DELETE_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                changeId:null,
                isFetching: false
            }
        }

        case types.DELETE_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.DELETE_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.DELETE_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                changeId:null,
                isFetching: false
            }
        }

        case types.DELETE_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        default:
            return state
    }
};