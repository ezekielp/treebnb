import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";

const UiReducer = combineReducers({
    modal: ModalReducer
});

export default UiReducer;