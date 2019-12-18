import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import CancelBookingContainer from './bookings/cancel_booking_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) return null;
    let { formType, message } = modal;


    let component;
    if (formType === 'Log in') {
        component = <LoginFormContainer />
    } else if (formType === 'Sign up') {
        if (!message) {
            component = <SignupFormContainer />
        } else {
            component = <SignupFormContainer message={message} />
        }
    } else if (formType === 'Cancel booking') {
        debugger;
        component = <CancelBookingContainer bookingId={message} />;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div 
                    className="close-x"
                    onClick={closeModal}>&#10005;</div>
                { component }
            </div>
        </div>
    );

}

const msp = state => ({
    modal: state.ui.modal
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal);