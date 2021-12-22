import { combineReducers } from "redux";
import userReducer, { createUserReducer } from "./userReducer";
import bookingReducer from "./bookings";
import loginReducer from "./loginReducer";
import roleReducer from "./roleReducer";
import companyReducer from "./companyReducer";

const reducers = combineReducers({
    login: loginReducer,
    user: userReducer,
    createUser: createUserReducer,
    role: roleReducer,
    company: companyReducer,
    bookings: bookingReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;