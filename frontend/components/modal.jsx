import React from 'react';
// import closeModal from '';
import { connect } from 'react-redux';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) return null;

    let component;
    if (modal === 'Log in') {
        component = <LoginFormContainer />
    } else {
        component = <SignupFormContainer />
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
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