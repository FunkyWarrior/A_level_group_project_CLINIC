export const GET_DOCTORS_REQUEST = "GET_DOCTORS_REQUEST";
export const GET_DOCTORS_REQUEST_SUCCESS = "GET_DOCTORS_REQUEST_SUCCESS";
export const GET_DOCTORS_REQUEST_FAIL = "GET_DOCTORS_REQUEST_FAIL";

export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_REQUEST_SUCCESS = "GET_SERVICES_REQUEST_SUCCESS";
export const GET_SERVICES_REQUEST_FAIL = "GET_SERVICES_REQUEST_FAIL";

export const GET_ALL_REQUEST = "GET_ALL_REQUEST";
export const GET_ALL_REQUEST_SUCCESS = "GET_ALL_REQUEST_SUCCESS";
export const GET_ALL_REQUEST_FAIL = "GET_ALL_REQUEST_FAIL";

export const PUT_ORDERS_REQUEST = "PUT_ORDERS_REQUEST";
export const PUT_ORDERS_REQUEST_SUCCESS = "PUT_ORDERS_REQUEST_SUCCESS";
export const PUT_ORDERS_REQUEST_FAIL = "PUT_ORDERS_REQUEST_FAIL";

export const CHANGE_APPOINTMENT_DATE= "CHANGE_APPOINTMENT_DATE";
export const CHANGE_APPOINTMENT_DOCTOR= "CHANGE_APPOINTMENT_DOCTOR";
export const CHANGE_APPOINTMENT_TIME= "CHANGE_APPOINTMENT_TIME";
export const CHANGE_APPOINTMENT_SPEC= "CHANGE_APPOINTMENT_SPEC";
export const CHANGE_APPOINTMENT_COMMENT= "CHANGE_APPOINTMENT_COMMENT";
export const CLEAR_APPOINTMENT= "CLEAR_APPOINTMENT";



const URL = "https://team-app-28f4a.firebaseio.com/";

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentDate = payload => ({
    type: CHANGE_APPOINTMENT_DATE,
    payload
});

export const setAppointmentDoctor = payload => ({
    type: CHANGE_APPOINTMENT_DOCTOR,
    payload
});

export const setAppointmentTime = payload => ({
    type: CHANGE_APPOINTMENT_TIME,
    payload
});

export const setAppointmentSpec = payload => ({
    type: CHANGE_APPOINTMENT_SPEC,
    payload
});

export const setAppointmentComment = payload => ({
    type: CHANGE_APPOINTMENT_COMMENT,
    payload
});

export const clearAppointment = payload => ({
    type: CLEAR_APPOINTMENT,
    payload
});

// -----------------------------------------------------------------------------------------------------------------


const putOrdersRequest = payload => ({
    type: PUT_ORDERS_REQUEST,
    payload
});

const putOrdersSuccess = payload => ({
    type: PUT_ORDERS_REQUEST_SUCCESS,
    payload
});

const putOrdersFail = payload => ({
    type: PUT_ORDERS_REQUEST_FAIL,
    payload
});

export const putOrders = (payload) => dispatch => {
    dispatch(putOrdersRequest());
    return fetch(`${URL}/orders.json`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(putOrdersSuccess(res)))
        .catch(err => dispatch(putOrdersFail(err)));

};


// -----------------------------------------------------------------------------------------------------------------

const getAllRequest = payload => ({
    type: GET_ALL_REQUEST,
    payload
});

const getAllRequestSuccess = payload => ({
    type: GET_ALL_REQUEST_SUCCESS,
    payload
});

const getAllRequestFail = payload => ({
    type: GET_ALL_REQUEST_FAIL,
    payload
});

export const getAll = () => dispatch => {
    dispatch(getAllRequest());
    return fetch(`${URL}.json`)
        .then(res => res.json())
        .then(res => dispatch(getAllRequestSuccess(res)))
        .catch(err => dispatch(getAllRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const getDoctorsRequest = payload => ({
    type: GET_DOCTORS_REQUEST,
    payload
});

const getDoctorsRequestSuccess = payload => ({
    type: GET_DOCTORS_REQUEST_SUCCESS,
    payload
});

const getDoctorsRequestFail = payload => ({
    type: GET_DOCTORS_REQUEST_FAIL,
    payload
});

export const getDoctors = () => dispatch => {
    dispatch(getDoctorsRequest());
    return fetch(`${URL}doctors.json`)
        .then(res => res.json())
        .then(res => dispatch(getDoctorsRequestSuccess(res)))
        .catch(err => dispatch(getDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
const getServicesRequest = payload => ({
    type: GET_SERVICES_REQUEST,
    payload
});

const getServicesRequestSuccess = payload => ({
    type: GET_SERVICES_REQUEST_SUCCESS,
    payload
});

const getServicesRequestFail = payload => ({
    type: GET_SERVICES_REQUEST_FAIL,
    payload
});

export const getServices = () => dispatch => {
    dispatch(getServicesRequest());
    return fetch(`${URL}services.json`)
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};