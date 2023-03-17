import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import getCartReducer from "./getCartReducer";

export type rootState = ReturnType<typeof rootReducer>
const rootReducer= combineReducers({getDataReducer,getCartReducer});
export default rootReducer;