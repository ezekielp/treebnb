import { connect } from 'react-redux';
import updateBounds from '../../actions/filter_actions';
import TreehouseSearchIndex from './treehouse_search_index';

const msp = state => {
    return {
        treehouses: Object.values(state.entities.treehouses)
    }
}

const mdp = dispatch => {
    return {
        fetchAllTreehouses: () => dispatch(fetchTreehouses()),
        updateBounds: bounds => dispatch(updateBounds(bounds))
    }
}

export default connect(msp, mdp)(TreehouseSearchIndex);