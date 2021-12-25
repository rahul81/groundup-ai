import { combineReducers } from "redux";
import userReducer, { createUserReducer, deleteUserReducer } from "./userReducer";
import loginReducer from "./loginReducer";
import roleReducer from "./roleReducer";
import companyReducer, { createCompanyReducer, deleteCompanyReducer } from "./companyReducer";

const reducers = combineReducers({
    login : loginReducer,

    role : roleReducer,

    user : userReducer,
    createUser : createUserReducer,
    removeUser : deleteUserReducer,

    company : companyReducer,
    createCompany : createCompanyReducer,
    deleteCompany : deleteCompanyReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;