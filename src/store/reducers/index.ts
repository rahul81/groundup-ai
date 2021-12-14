import { combineReducers } from "redux";
import adminReducer from "./userReducers";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    login : loginReducer,
    user : adminReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;