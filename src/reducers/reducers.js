import * as types from '../actionsTypes/actionsTypes'

import {postNewDoctorForm,postNewServiceForm} from '../utils/formFields'

const defaultState = {
    doctors:[],

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
    specialityArray:[],

<<<<<<< HEAD
    appointment:{
        shedule:null,
        time:null,
        doctor:null,
        spec:null,
        comment:  " "
      },

    timeArray:[ ],
=======
>>>>>>> ffc22fefa05d985c41e67b265e33a56a26cd6bfe
    isFetching:false,
    error: null,

};

// -----------------------------------------------------------------------------------------------------------------

export const appReducer = (state = defaultState,action) => {

    switch (action.type) {

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SPECIALITY_ARRAY : {
            const arr = state.specialityArray.slice();
            action.payload.checked ? arr.push(action.payload.value) : arr.splice(arr.indexOf(action.payload.value),1);
            return {
                ...state,
                specialityArray: arr
            };
        }

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
            let doctor = action.payload.data.find(el => el.name === action.payload.item);
            let result;
            let specArray=[];
            if (doctor){
                result = Object.keys(doctor).map(key => {
                    return [key, doctor[key]];
                });
                doctor.speciality.map(el => specArray.push(el._id))
            }
            return {
                ...state,
                specialityArray:specArray,
                changeDoctorId: doctor ? doctor._id : null,
                postNewDoctor:doctor ? state.postNewDoctor.map(el => result.find(item => item[0] === el.name) ? {
                    ...el,
                    value:result.find(item => item[0] === el.name)[1]
                } : el) : postNewDoctorForm
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SELECTED_SERVICE_ID : {
            let service = action.payload.data.find(el => el.name === action.payload.item);
            let result;
                if (service){
                    result = Object.keys(service).map(key => {
                        return [key, service[key]];
                    });
                }
            return {
                ...state,
                changeServiceId: service ? service._id : null,
                postNewService: service ? state.postNewService.map(el => result.find(item => item[0] === el.name) ? {
                    ...el,
                    value:result.find(item => item[0] === el.name)[1]
                } : el) : postNewServiceForm
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