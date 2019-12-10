import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        errors: state.errors,
        formType: "Sign up"
    }
}

const mdp = dispatch => ({
    loginDemoUser: () => dispatch(loginDemoUser()),
    submitForm: user => dispatch(signupUser(user)),
    closeModal: () => dispatch(closeModal()),
    switchForm: (
        <button onClick={() => dispatch(openModal('Sign up'))}>
            Log in
            </button>
    )
})

export default connect(msp, mdp)(SessionForm);