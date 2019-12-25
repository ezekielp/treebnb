import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchTreehouseSearchResults } from '../../actions/treehouse_actions';

const msp = ({ entities, session }) => {
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {}
    return {
        currentUser,
        navbarType: 'With search'
    }
};

const mdp = dispatch => {
    return {
        fetchTreehouseSearchResults: searchTerm => dispatch(fetchTreehouseSearchResults(searchTerm)),
        logoutUser: () => dispatch(logoutUser()),
        openModal: formType => dispatch(openModal(formType))
    };
};

export default connect(msp, mdp)(Navbar);

