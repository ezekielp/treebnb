import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser, loginDemoUser } from '../../actions/session_actions';

const msp = state => {
    return {
        formType: 'Log in'
    }
}

const mdp = dispatch => {
    return {
        loginDemoUser: () => dispatch(loginDemoUser()),
        submitForm: user => dispatch(loginUser(user))
    }
}

export default connect(msp, mdp)(SessionForm);