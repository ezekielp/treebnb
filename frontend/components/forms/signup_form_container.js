import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser, loginDemoUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
    // let errors = {};
    // if (state.errors.session) {
    //     let { session } = state.errors;
    //     errors.email = session.email ? session.email : "";
    //     errors.password = session.password ? session.password : "";
    //     errors.first = session.first ? session.first : "";
    //     errors.last = session.last ? session.last : "";
    // }
    return {
        errors: state.errors.session,
        formType: "Sign up"
    }
}

const mdp = dispatch => ({
    loginDemoUser: () => dispatch(loginDemoUser()),
    submitForm: user => dispatch(signupUser(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: formType => dispatch(openModal(formType)),
    switchForm: (
        <button onClick={() => dispatch(openModal('Sign up'))}>
            Log in
            </button>
    )
})

export default connect(msp, mdp)(SessionForm);