import { combineReducers } from "redux";
import adminReducer from "./adminReducers";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    login : loginReducer,
    admin : adminReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;