import { Box,  Divider, Typography } from '@mui/material';
import { useFormik } from 'formik';
import GButton from '../common/button/GButton';
import GCheckbox from '../common/checkobx/GCheckbox';
import './notification-view.scss'


interface Notification{
    text:string;
    selected:string;
}

interface Notifications{
    text: string
    notifications: Notification[];
}

export default function NotificationView() {

    const initialState: any = {
        machineIlding_SS: true,
        machineIlding_PM: false,
        bookingSchheduling_PM: false,
        bookingSchheduling_DPCM: false,
        bookingApproval_DPCM: false,
        bookingApproval_PM: true,
    }

    const machineIlding: Notifications = {
        text: "Machine Ilding",
        notifications: [
            { text: "Project Manager", selected: "machineIlding_PM" },
            { text: "Site Supervisor", selected: "machineIlding_SS" }
        ]       
    };

    const bookingSchheduling: Notifications = {
        text: "Booking Schedule Changes",
        notifications: [
            { text: "Project Manager", selected: "bookingSchheduling_PM" },
            { text: "Deputy PM/Construction Manager", selected: "bookingSchheduling_DPCM" }
        ]
    };

    const bookingApproval: Notifications = {
        text: "Booking Approval Status",
        notifications: [
            { text: "Project Manager", selected: "bookingApproval_PM" },
            { text: "Deputy PM/Construction Manager", selected: "bookingApproval_DPCM" }
        ]
    };

    const allNotifications : Notifications[] = [
        machineIlding, bookingSchheduling, bookingApproval
    ];

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: (data) => {
        },
    });

    return (
        <Box className="admin-view">
            <Typography className="heading" variant="h5" component="h2">Notifications</Typography>
            <Divider />
            <form onSubmit={formik.handleSubmit}>
            {(allNotifications || []).map((notif) => <Box className="sub-section">
                {notif && <Typography className="heading" variant="h6" component="div">{notif.text}</Typography>}
                {(notif.notifications || []).map((item, index) =>
                   <Box className="item">                            
                        <GCheckbox 
                        selected={item.selected} 
                        formik={formik} 
                        id={item.selected} 
                        label={item.text}/>
               </Box>
                )}
            </Box>)}
            <GButton type="submit" title='Update Changes' className='update-changes' sx={{ mt: 3 }} />
            </form>
        </Box>
    )
}
