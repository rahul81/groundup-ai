import { combineReducers } from "redux";
import adminReducer from "./userReducers";
import loginReducer from "./loginReducer";
import roleReducer from "./roleReducer";

const reducers = combineReducers({
    login : loginReducer,
    user : adminReducer,
    role : roleReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;