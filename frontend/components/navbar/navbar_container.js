import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = ({ entities, session }) => {
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {}
    return {
        currentUser
    }
};

const mdp = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        openModal: formType => dispatch(openModal(formType))
    };
};

export default connect(msp, mdp)(Navbar);