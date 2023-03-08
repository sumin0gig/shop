import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";

export type rootState = ReturnType<typeof rootReducer>
const rootReducer= combineReducers({getDataReducer});
export default rootReducer;