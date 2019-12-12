import { connect } from 'react-redux';
import TreehouseIndex from './treehouse_index';
import { fetchTreehouses } from '../../actions/treehouse_actions';

const msp = state => {
    return {
        treehouses: Object.values(state.entities.treehouses)
    }
}

const mdp = dispatch => {
    return {
        fetchTreehouses: () => dispatch(fetchTreehouses())
    }
}

export default connect(msp, mdp)(TreehouseIndex);