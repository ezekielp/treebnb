import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
// import merge from 'lodash';

const ErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            let sessionErrors = {};
            action.errors.forEach(err => {
                let key = err.split(" ")[0].toLowerCase();
                sessionErrors[key] = err
            });
            return { "session" : sessionErrors };
        default:
            return {};
    }
}

export default ErrorsReducer;