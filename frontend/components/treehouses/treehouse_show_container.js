import { connect } from 'react-redux';
import { fetchTreehouse } from '../../actions/treehouse_actions';
import { createBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import TreehouseShow from './treehouse_show';

const msp = ({ entities, session }, ownProps) => {
    let currentUser = session.currentUser ? entities.users[session.currentUser.id] : {};

    return {
        treehouse: entities.treehouses[ownProps.match.params.treehouseId],
        currentUser
    }
}

const mdp = dispatch => {
    return {
        fetchTreehouse: treehouseId => dispatch(fetchTreehouse(treehouseId)),
        createBooking: (treehouseId, booking) => dispatch(createBooking(treehouseId, booking)),
        openModal: (formType, message) => dispatch(openModal(formType, message))
    }
}

export default connect(msp, mdp)(TreehouseShow);