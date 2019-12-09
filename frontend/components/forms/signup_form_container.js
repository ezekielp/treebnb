import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser } from '../../actions/session_actions';

const msp = state => {
    return {
        formType: "Sign up"
    }
}

const mdp = dispatch => ({
    loginDemoUser: () => dispatch(loginDemoUser()),
    submitForm: user => dispatch(signupUser(user))
})

export default connect(msp, mdp)(SessionForm);