import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import UserBookings from './user_bookings';

const msp = state => {
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {}
    return {
        bookings: state.entities.bookings,
        currentUser
    }
};

const mdp = dispatch => {
    return {
        fetchBookings: (userId) => dispatch(fetchBookings(userId))
    }
}

export default connect(msp, mdp)(UserBookings);