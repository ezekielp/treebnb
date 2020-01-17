import { connect } from 'react-redux';
import { clearBookingsState, deleteBooking, fetchCurrentUserBookings, fetchBooking, removeBookingSuccessMessage } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import UserBookings from './user_bookings';

const msp = state => {
    let { session, entities } = state;
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {};

    let bookings = Object.values(entities.bookings).filter(booking => {
        return booking.guest_id === currentUser.id;
    })

    return {
        // bookings: Object.values(entities.bookings),
        bookings,
        success: state.ui.success,
        currentUser
    }
};

const mdp = dispatch => {
    return {
        clearBookingsState: () => dispatch(clearBookingsState()),
        deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
        fetchCurrentUserBookings: () => dispatch(fetchCurrentUserBookings()),
        fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
        openModal: (formType, bookingId) => dispatch(openModal(formType, bookingId)),
        removeBookingSuccessMessage: () => dispatch(removeBookingSuccessMessage())
    }
}

export default connect(msp, mdp)(UserBookings);