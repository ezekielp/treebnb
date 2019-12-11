import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser, loginDemoUser } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = state => {
    // let errors = {};
    // if (state.errors.session) {
    //     let { session } = state.errors;
    //     errors.email = session.email ? session.email : "";
    //     errors.password = session.password ? session.password : "";
    // }
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