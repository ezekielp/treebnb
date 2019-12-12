import { RECEIVE_TREEHOUSES, RECEIVE_TREEHOUSE } from '../actions/treehouse_actions';
import merge from 'lodash/merge';

const TreehousesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TREEHOUSES:
            return action.treehouses;
        case RECEIVE_TREEHOUSE:
            return merge({}, state, { [action.treehouse.id]: action.treehouse });
        default:
            return state;
    }
}

export default TreehousesReducer;