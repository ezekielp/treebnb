import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import SuccessMessagesReducer from './success_messages_reducer';

const UiReducer = combineReducers({
    modal: ModalReducer,
    success: SuccessMessagesReducer
});

export default UiReducer;