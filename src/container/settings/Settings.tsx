import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NotificationView from '../../components/notification-view/NotificationView';
import GroundUpDrawer from '../../components/common/drawer/GDrawer'
import GroundUpAppBar from '../../components/common/header/GroundUpAppBar'
import { USER_ADMIN, USER_ADMIN_ACTIVITY_MANAGEMENT, USER_ADMIN_CRANE_BOOKING_MANAGEMENT, USER_ADMIN_MAINTENANCE_MANAGEMENT, USER_ADMIN_MATERIAL_MANAGEMENT, USER_ADMIN_REPORTS_MANAGEMENT, USER_ADMIN_ROLE_MANAGEMENT, USER_ADMIN_USER_MANAGEMENT, USER_NOTIFICATION } from '../../constants/ContextPaths';
import AdminView from '../../components/admin-view/AdminView';

export default function Settings() {
    const [open, setOpen] = React.useState(false);
    const [headerTab, setHeaderTab] = React.useState(-1);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const drawerItems = [
        {text:'Notifications', id: USER_NOTIFICATION, notifications:10}, 
        {
            text:'Admin',
            id: USER_ADMIN,
            subMenu : [
                {text:'User Management', id: USER_ADMIN_USER_MANAGEMENT },
                {text:'Role Management', id: USER_ADMIN_ROLE_MANAGEMENT },
                {text:'Material Management', id: USER_ADMIN_MATERIAL_MANAGEMENT },
                {text:'Activity Management', id: USER_ADMIN_ACTIVITY_MANAGEMENT },
                {text:'Maintenance Management', id: USER_ADMIN_MAINTENANCE_MANAGEMENT },
                {text:'Crane Booking Management', id: USER_ADMIN_CRANE_BOOKING_MANAGEMENT },
                {text:'Reports', id: USER_ADMIN_REPORTS_MANAGEMENT },
            ]
        }
    ]
    return (
        <div>
            <GroundUpAppBar headerTab={headerTab} setHeaderTab={setHeaderTab} handleDrawerToggle={handleDrawerToggle}/>
            <GroundUpDrawer items={drawerItems} mobileOpen={open} handleDrawerToggle={handleDrawerToggle}>
                <Switch>
                    <Route path={USER_NOTIFICATION}>
                        <NotificationView/>
                    </Route>
                    <Route path={USER_ADMIN}>
                        <AdminView/>
                    </Route>
                </Switch>
            </GroundUpDrawer> 
        </div>
    )
}
