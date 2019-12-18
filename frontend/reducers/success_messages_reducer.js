import { RECEIVE_BOOKING_SUCCESS_MESSAGE } from '../actions/booking_actions';

const SuccessMessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKING_SUCCESS_MESSAGE:
            return action.msg;
        default:
            return {};
    }
}

export default SuccessMessagesReducer;