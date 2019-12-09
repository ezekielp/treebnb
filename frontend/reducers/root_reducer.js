import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    ui: UiReducer,
    errors: ErrorsReducer,
    session: SessionReducer
});

export default RootReducer;