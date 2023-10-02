import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import listReducer from "./listReducer";
import subTaskReducer from "./subTaskReducer";
import taskDescReducer from "./taskDescReducer";
import todoReducers from "./todoReducers";

const rootReducer = combineReducers({
    todoReducers,
    listReducer,
    cardReducer,
    subTaskReducer,
    taskDescReducer
})

export default rootReducer;