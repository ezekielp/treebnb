import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import TreehousesReducer from './treehouses_reducer';
import BookingsReducer from './bookings_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    treehouses: TreehousesReducer,
    bookings: BookingsReducer
});

export default EntitiesReducer;