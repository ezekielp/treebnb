import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';
import merge from 'lodash';

const _nullSession = {
    currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return merge(
                {},
                { "currentUser": action.user });
        case LOGOUT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default SessionReducer;