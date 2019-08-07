import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    appointment: {
        sheduleId: null,
        time: null,
        doctorId: null,
        specId: null,
        comment: ''
    },
    timeArray:[]
};

export const appointmentReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.CHANGE_APPOINTMENT_SHEDULE : {
            let timeArray =[];
            let doctor = action.payload.doctors.find(el => el._id === state.appointment.doctorId);
            let shedule = doctor.shedule.find(el => el.data === action.payload.data);
            let duration = action.payload.services.find(el => el._id === state.appointment.specId).duration;
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
                    sheduleId:shedule._id,
                },
                timeArray:timeArray
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
                    specId:action.payload.services.find(el => el.name === action.payload.data)._id,
                    sheduleId:null,
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
                appointment: {
                    sheduleId: null,
                    time: null,
                    doctorId: null,
                    specId: null,
                    comment: ''
                },
                timeArray:[]
            };
        }


        default:
            return state
    }
};