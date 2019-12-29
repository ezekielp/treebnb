import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import TreehousesReducer from './treehouses_reducer';
import BookingsReducer from './bookings_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    treehouses: TreehousesReducer,
    bookings: BookingsReducer,
    reviews: ReviewsReducer
});

export default EntitiesReducer;