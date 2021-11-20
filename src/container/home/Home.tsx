import React from "react";
import { Route, Switch } from "react-router";
import GroundUpDrawer from "../../components/common/drawer/Drawer";
import GroundUpAppBar from "../../components/common/header/GroundUpAppBar";
import { HOME_BOOKING, HOME_GRANTT_CHART } from "../../constants/ContextPaths";
import BookingView from "../../components/booking-view/BookingView";
import GranttChartView from "../../components/grant-chart-view/GranttChartView";

interface HomeProps {
    children?: any;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [open, setOpen] = React.useState(false);
    const [headerTab, setHeaderTab] = React.useState(0);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const drawerItems = [
        { text: 'Crane Booking', id: HOME_BOOKING, notifications: 20 },
        { text: 'Grantt Chart', id: HOME_GRANTT_CHART },
        { text: 'Calendar', id: '/home/calendar' }
    ]
    return (
        <>
            <GroundUpAppBar headerTab={headerTab} setHeaderTab={setHeaderTab} handleDrawerToggle={handleDrawerToggle} />
            <GroundUpDrawer items={drawerItems} mobileOpen={open} handleDrawerToggle={handleDrawerToggle}>
                <Switch>
                    <Route path={HOME_BOOKING}>
                        <BookingView />
                    </Route>
                    <Route path={HOME_GRANTT_CHART}>
                        <GranttChartView />
                    </Route>
                </Switch>
            </GroundUpDrawer>
        </>
    );
}

export default Home;