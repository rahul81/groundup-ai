import { Switch, Route } from 'react-router-dom';
import { USER_ADMIN_USER_MANAGEMENT, USER_ADMIN_ROLE_MANAGEMENT, USER_ADMIN_MATERIAL_MANAGEMENT, USER_ADMIN_ACTIVITY_MANAGEMENT, USER_ADMIN_MAINTENANCE_MANAGEMENT, USER_ADMIN_CRANE_BOOKING_MANAGEMENT, USER_ADMIN_REPORTS_MANAGEMENT,USER_ADMIN_COMPANY_MANAGEMENT } from '../../constants/ContextPaths';
import './admin-view.scss'
import ActivityManagement from './management/activity/ActivityManagement';
import CraneBookingManagement from './management/crane-booking/CraneBookingManagement';
import MaintenanceManagement from './management/maintenance/MaintenanceManagement';
import MaterialManagement from './management/material/MaterialManagement';
import ReportsManagement from './management/reports/ReportsManagement';
import RoleManagement from './management/role/RoleManagement';
import UserManagement from './management/user/UserManagement';
import CompanyManagement from './management/company/CompanyManagement';
import { Box } from '@mui/material';

export default function AdminView() {
    return (
        <Box className="admin-view">
            <Switch>
                <Route path={USER_ADMIN_USER_MANAGEMENT}>
                    <UserManagement/>
                </Route>
                <Route path={USER_ADMIN_ROLE_MANAGEMENT}>
                    <RoleManagement/>
                </Route>
                <Route path={USER_ADMIN_MATERIAL_MANAGEMENT}>
                    <MaterialManagement/>
                </Route>
                <Route path={USER_ADMIN_ACTIVITY_MANAGEMENT}>
                    <ActivityManagement/>
                </Route>
                <Route path={USER_ADMIN_MAINTENANCE_MANAGEMENT}>
                    <MaintenanceManagement/>
                </Route>
                <Route path={USER_ADMIN_CRANE_BOOKING_MANAGEMENT}>
                    <CraneBookingManagement/>
                </Route>
                <Route path={USER_ADMIN_REPORTS_MANAGEMENT}>
                    <ReportsManagement/>
                </Route>
                <Route path={USER_ADMIN_COMPANY_MANAGEMENT}>
                    <CompanyManagement/>
                </Route>
            </Switch>
        </Box>
    )
}
