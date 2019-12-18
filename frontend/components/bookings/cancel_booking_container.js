import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';
import CancelBookingForm from './cancel_booking_form';

const msp = state => {
    return {
        formType: 'Cancel booking'
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
    }
}

export default connect(msp, mdp)(CancelBookingForm);