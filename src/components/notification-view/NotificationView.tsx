import { Box, Checkbox, Divider, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import GButton from '../common/button/GButton';
import './notification-view.scss'


interface Notification{
    text:string;
    initialValue:string;
}

interface Notifications{
    text: string
    notifications: Notification[];
}

export default function NotificationView() {
    const machineIlding: Notifications = {
        text: "Machine Ilding",
        notifications: [
            { text: "Project Manager", initialValue: "machineIlding_PM" },
            { text: "Site Supervisor", initialValue: "machineIlding_SS" }
        ]       
    };

    const bookingSchheduling: Notifications = {
        text: "Booking Schedule Changes",
        notifications: [
            { text: "Project Manager", initialValue: "bookingSchheduling_PM" },
            { text: "Deputy PM/Construction Manager", initialValue: "bookingSchheduling_DPCM" }
        ]
    };

    const bookingApproval: Notifications = {
        text: "Booking Approval Status",
        notifications: [
            { text: "Project Manager", initialValue: "bookingApproval_PM" },
            { text: "Deputy PM/Construction Manager", initialValue: "bookingApproval_DPCM" }
        ]
    };

    const allNotifications : Notifications[] = [
        machineIlding, bookingSchheduling, bookingApproval
    ];

    const initialValues: any = {
        machineIlding_SS: true,
        machineIlding_PM: true,
        bookingSchheduling_PM: false,
        bookingSchheduling_DPCM: false,
        bookingApproval_DPCM: true,
        bookingApproval_PM: true,
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (data) => {
            console.log(data);
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
                        <Checkbox
                            className="item-checkbox"
                            aria-label={item.initialValue}
                            name={item.initialValue}
                            id={item.initialValue}
                            checked={formik.values[item.initialValue.toString()]}
                            onChange={formik.handleChange}
                        />
                        <Typography variant="body1" >{item.text}</Typography>
                    </Box>
                )}
            </Box>)}
            <GButton type="submit" title='Update Changes' className='update-changes' sx={{ mt: 3 }} />
            </form>
        </Box>
    )
}
