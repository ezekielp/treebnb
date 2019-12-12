import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser, loginDemoUser } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        errors: state.errors.session,
        formType: 'Log in'
    }
}

const mdp = dispatch => {
    return {
        loginDemoUser: () => dispatch(loginDemoUser()),
        submitForm: user => dispatch(loginUser(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: formType => dispatch(openModal(formType)),
        switchForm: (
            <button onClick={() => dispatch(openModal('Sign up'))}>
                Sign up
            </button>
        )
    }
}

export default connect(msp, mdp)(SessionForm);