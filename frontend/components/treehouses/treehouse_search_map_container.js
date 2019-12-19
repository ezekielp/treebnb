import { connect } from 'react-redux';
import TreehouseSearchMap from './treehouse_search_map';

const msp = state => {
    return {
        treehouses: Object.values(state.entities.treehouses)
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, null)(TreehouseSearchMap);