import { RECEIVE_BOOKING, REMOVE_BOOKING, CLEAR_BOOKINGS_STATE } from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKING:
            return merge({}, state, { [action.booking.id]: action.booking });
        case REMOVE_BOOKING:
            let newState = merge({}, state);
            delete newState[action.bookingId];
            return newState;
        case CLEAR_BOOKINGS_STATE:
            return {};
        default:
            return state;
    }
}

export default BookingsReducer;