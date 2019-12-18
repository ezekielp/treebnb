import { connect } from 'react-redux';
import { fetchBooking, removeBookingSuccessMessage } from '../../actions/booking_actions';
import UserBookings from './user_bookings';

const msp = state => {
    let { session, entities } = state;
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {}
    return {
        bookings: Object.values(entities.bookings),
        success: state.ui.success,
        currentUser
    }
};

const mdp = dispatch => {
    return {
        fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
        removeBookingSuccessMessage: () => dispatch(removeBookingSuccessMessage())
    }
}

export default connect(msp, mdp)(UserBookings);