import { connect } from 'react-redux';
import TreehouseSearchIndex from './treehouse_search_index';

const msp = state => {
    return {
        treehouses: Object.values(state.entities.treehouses)
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, null)(TreehouseSearchIndex);