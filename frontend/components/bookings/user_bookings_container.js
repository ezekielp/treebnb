import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import UserBookings from './user_bookings';

const msp = state => {
    // You want to pass in the user's bookings
    return {
        bookings: state.entities.bookings
    }
};

const mdp = dispatch => {
    return {
        fetchBookings: (userId) => dispatch(fetchBookings(userId))
    }
}

export default connect(msp, mdp)(UserBookings);