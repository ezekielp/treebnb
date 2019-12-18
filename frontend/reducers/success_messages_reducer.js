import { RECEIVE_BOOKING_SUCCESS_MESSAGE, REMOVE_BOOKING_SUCCESS_MESSAGE } from '../actions/booking_actions';

const SuccessMessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKING_SUCCESS_MESSAGE:
            return [action.msg];
        case REMOVE_BOOKING_SUCCESS_MESSAGE:
            return {};
        default:
            return state;
    }
}

export default SuccessMessagesReducer;