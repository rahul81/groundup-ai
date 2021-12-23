import { combineReducers } from "redux";
import userReducer, { createUserReducer, deleteUserReducer } from "./userReducer";
import loginReducer from "./loginReducer";
import roleReducer from "./roleReducer";
import companyReducer from "./companyReducer";

const reducers = combineReducers({
    login : loginReducer,
    user : userReducer,
    createUser : createUserReducer,
    removeUser : deleteUserReducer,
    role : roleReducer,
    company : companyReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;