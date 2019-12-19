import { RECEIVE_TREEHOUSES, RECEIVE_TREEHOUSE, CLEAR_TREEHOUSE_STATE } from '../actions/treehouse_actions';
import merge from 'lodash/merge';

const TreehousesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TREEHOUSES:
            return action.treehouses;
        case RECEIVE_TREEHOUSE:
            return merge({}, state, { [action.treehouse.id]: action.treehouse });
        case CLEAR_TREEHOUSE_STATE:
            return {};
        default:
            return state;
    }
}

export default TreehousesReducer;