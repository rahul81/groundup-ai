import { combineReducers } from "redux";
import adminReducer from "./userReducers";
import loginReducer from "./loginReducer";
import roleReducer from "./roleReducer";
import companyReducer from "./companyReducer";

const reducers = combineReducers({
    login : loginReducer,
    user : adminReducer,
    role : roleReducer,
    company : companyReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;