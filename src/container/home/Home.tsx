import React from "react";
import { Route, Switch } from "react-router";
import GroundUpDrawer from "../../components/common/drawer/Drawer";
import GroundUpAppBar from "../../components/common/header/GroundUpAppBar";
import { HOME_BOOKING } from "../../constants/ContextPaths";
import BookingView from "../../components/booking-view/BookingView";

interface HomeProps {
    children?: any;
  }

const Home: React.FC<HomeProps>  = (props: HomeProps) => {
    const [open, setOpen] = React.useState(false);
    const [headerTab, setHeaderTab] = React.useState(0);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const drawerItems = [
        {text:'Crane Booking', id: HOME_BOOKING, notifications:20}, 
        {text:'Grantt Chart', id: '/home/chart'}, 
        {text:'Calendar', id:'/home/calendar'}
    ]
    return (
        <>
            <GroundUpAppBar headerTab={headerTab} setHeaderTab={setHeaderTab} handleDrawerToggle={handleDrawerToggle}/>
            <GroundUpDrawer items={drawerItems} mobileOpen={open} handleDrawerToggle={handleDrawerToggle}>
                <Switch>
                    <Route path={HOME_BOOKING}>
                        <BookingView/>
                    </Route>
                </Switch>
            </GroundUpDrawer> 
        </>
    );
}

export default Home;