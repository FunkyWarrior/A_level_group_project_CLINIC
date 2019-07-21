import * as types from '../actionsTypes/actionsTypes'

const postNewDoctorForm =[
    {
        id:1,
        type:'text',
        value:"",
        name:'name',
        placeholder:'Enter doctor Name and Last Name',
        required:true
    },
    {
        id:2,
        type:'text',
        value:"",
        name:'experience',
        placeholder:'Enter practice start date',
        required:true
    },
    {
        id:3,
        type:'text',
        value:"",
        name:'photo',
        placeholder:'Enter path to photo here',
        required:true
    },
    {
        id:4,
        type:'text',
        value:"",
        name:'profession',
        placeholder:'Enter profession here',
        required:true
    },
    {
        id:5,
        type:'text',
        value:"",
        name:'skillsDescription',
        placeholder:'Enter skills description here',
        required:true
    },
    {
        id:6,
        type:'text',
        value:"",
        name:'speciality',
        placeholder:'Enter array of service speciality description here',
        required:true
    }
];


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
    postNewShedule:{
        data:null,
        doctor:null
    },
    postNewDoctor:postNewDoctorForm,
    changeDoctor:null,
    sheduleMonthArray:null,
    services:[],
    orders:[],
    users:[],
    reviews: [],
    appointment:{
        shedule:null,
        time:null,
        doctor:null,
        spec:null,
        comment:''
    },
    timeArray:[],
    wrongDate:true,
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

        case types.CHANGE_SELECTED_DOCTOR : {
            return {
                ...state,
                changeDoctor: state.doctors.find(el => el.name === action.payload)._id,
                postNewDoctor:postNewDoctorForm
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_APPOINTMENT_SHEDULE : {
            let timeArray =[];
            let doctor = state.doctors.find(el => el._id === state.appointment.doctor);
            let shedule = doctor.shedule.find(el => el._id === action.payload);
            let duration = state.services.find(el => el._id === state.appointment.spec).duration;
            for (let index in shedule) {
                let check = true;
                for (let x=0;x < duration; x++){
                    if (shedule[`${+index.split(':')[0]+x < 10 ? '0' +(+index.split(':')[0] + x) + ':00' : +index.split(':')[0]+ x + ':00'}`] !== true){
                        check = false
                    }
                }
                if (check) timeArray.push({[`${index}`]:shedule[`${index}`]});
            }
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    shedule:action.payload
                },
                timeArray:timeArray,
                wrongDate: action.payload
            };
        }

        case types.CHANGE_APPOINTMENT_DOCTOR : {
            return {
                ...state,
                appointment:{
                    ...state.appointment,
                    doctor:action.payload
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
                    spec:state.services.find(el => el.name === action.payload)._id,
                    shedule:null,
                    time:null
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

        case types.PUT_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
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

        default:
            return state
    }
};