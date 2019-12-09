import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
UsersReducer

const EntitiesReducer = combineReducers({
    users: UsersReducer
})

export default EntitiesReducer;