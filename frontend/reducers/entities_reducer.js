import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
UsersReducer
import TreehousesReducer from './treehouses_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    treehouses: TreehousesReducer
})

export default EntitiesReducer;