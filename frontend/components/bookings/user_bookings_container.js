import { connect } from 'react-redux';
import { clearBookingsState, deleteBooking, fetchBooking, removeBookingSuccessMessage } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import UserBookings from './user_bookings';

const msp = state => {
    let { session, entities } = state;
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {};
    // let userBookings;
    // if (currentUser.id) {
    //     userBookings = Object.values(entities.bookings).filter(booking => currentUser.bookingIds.includes(booking.id))
    // } else {
    //     userBookings = [];
    // }

    return {
        bookings: Object.values(entities.bookings),
        success: state.ui.success,
        currentUser
    }
};

const mdp = dispatch => {
    return {
        clearBookingsState: () => dispatch(clearBookingsState()),
        deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
        fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
        openModal: (formType, bookingId) => dispatch(openModal(formType, bookingId)),
        removeBookingSuccessMessage: () => dispatch(removeBookingSuccessMessage())
    }
}

export default connect(msp, mdp)(UserBookings);