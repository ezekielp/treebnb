import { connect } from 'react-redux';
import { fetchTreehouse } from '../../actions/treehouse_actions';
import TreehouseShow from './treehouse_show';

const msp = (state, ownProps) => {
    return {
        treehouse: state.entities.treehouses[ownProps.match.params.treehouseId]
    }
}

const mdp = dispatch => {
    return {
        fetchTreehouse: treehouseId => dispatch(fetchTreehouse(treehouseId))
    }
}

export default connect(msp, mdp)(TreehouseShow);