import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

const Modal = ({modal, closeModal}) => {
    // debugger;
    if (!modal) return null;

    let component;
    if (modal === 'Log in') {
        component = <LoginFormContainer />
    } else if (modal === 'Sign up') {
        component = <SignupFormContainer />
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