import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import SuccessMessagesReducer from './success_messages_reducer';
import FilterReducer from "./filter_reducer";

const UiReducer = combineReducers({
    bounds: FilterReducer,
    modal: ModalReducer,
    success: SuccessMessagesReducer
});

export default UiReducer;