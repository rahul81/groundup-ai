import { combineReducers } from "redux";
import userReducer, { createUserReducer, deleteUserReducer, editUserReducer } from "./userReducer";
import { bookingReducer , requestNewReducer} from "./bookings";
import loginReducer from "./loginReducer";
import roleReducer, { createRoleReducer, deleteRoleReducer, updateRoleReducer } from "./roleReducer";
import companyReducer, { createCompanyReducer, deleteCompanyReducer, editCompanyReducer } from "./companyReducer";
import priviledgesReducer from "./priviledgesReducer";
import activityReducer, { createActivityReducer, deleteActivityReducer, updateActivityReducer } from "./activityReducer";
import craneReducer, { createCraneReducer, deleteCraneReducer, editCraneReducer } from "./craneReducer";
import notificationReducer from "./notificationReducer";

const reducers = combineReducers({
    login : loginReducer,

    role : roleReducer,
    createRole : createRoleReducer,
    deleteRole : deleteRoleReducer,
    updateRole : updateRoleReducer,

    bookings: bookingReducer,
    newRequest: requestNewReducer,
    // getCranes: getCranesReducer,
    // getLifts: liftReducer,

    user : userReducer,
    createUser : createUserReducer,
    removeUser : deleteUserReducer,
    editUser : editUserReducer,

    priviledges : priviledgesReducer,

    company : companyReducer,
    createCompany : createCompanyReducer,
    deleteCompany : deleteCompanyReducer,
    editcompany : editCompanyReducer,

    activity: activityReducer,
    createActivity : createActivityReducer,
    updateActivity : updateActivityReducer,
    deleteActivity : deleteActivityReducer,
    
    notification: notificationReducer,
    crane : craneReducer,
    createCrane : createCraneReducer,
    editCrane : editCraneReducer,
    deleteCrane : deleteCraneReducer

});

export default reducers;

export type RootState = ReturnType<typeof reducers>;