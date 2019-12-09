import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '';

const msp = ({entities, session}) => {
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {}
    return {
        currentUser
    }
};

const mdp = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(Greeting);