import * as types from '../actionsTypes/actionsTypes'

export const createCalendarMonthArray = payload => ({
    type: types.CREATE_CALENDAR_MONTH_ARRAY,
    payload
});

export const changeCalendarMonth = payload => ({
    type: types.CHANGE_CALENDAR_MONTH,
    payload
});

