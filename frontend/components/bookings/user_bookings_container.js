import { connect } from 'react-redux';
import { fetchBooking } from '../../actions/booking_actions';
import UserBookings from './user_bookings';

const msp = state => {
    let { session, entities } = state;
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {}
    return {
        bookings: Object.values(entities.bookings),
        currentUser
    }
};

const mdp = dispatch => {
    return {
        fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId))
    }
}

export default connect(msp, mdp)(UserBookings);