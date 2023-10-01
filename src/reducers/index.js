import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import listReducer from "./listReducer";
import todoReducers from "./todoReducers";

const rootReducer = combineReducers({
    todoReducers,
    listReducer,
    cardReducer
})

export default rootReducer;