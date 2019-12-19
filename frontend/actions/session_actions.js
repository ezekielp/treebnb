export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER"; 
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as SessionAPIUtil from '../util/session_api_util';
import { clearBookingsState } from './booking_actions';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const logout = () => ({
    type: LOGOUT_USER
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const loginDemoUser = () => dispatch => {
    return SessionAPIUtil.loginDemoUser()
        .then(user => dispatch(receiveUser(user)));
}

export const signupUser = user => dispatch => {
    return SessionAPIUtil.signupUser(user)
        .then(user => dispatch(receiveUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const loginUser = user => dispatch => {
    return SessionAPIUtil.loginUser(user)
        .then(user => dispatch(receiveUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const logoutUser = () => dispatch => {
    return SessionAPIUtil.logoutUser()
        .then(() => dispatch(logout()))
        .then(() => dispatch(clearBookingsState()));
}