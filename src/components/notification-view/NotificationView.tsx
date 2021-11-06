import { Box, Button, Checkbox, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import './notification-view.scss'

interface Notification{
    text:string;
    selected:boolean;
}

interface Notifications{
    text: string
    notifications: Notification[];
}

export default function NotificationView() {
    const machineIlding: Notifications = {
        text: "Machine Ilding",
        notifications : [
            {text: "Project Manager", selected: true},
            {text: "Site Supervisor", selected: false}
        ]
    };

    const bookingSchheduling: Notifications = {
        text: "Booking Schedule Changes",
        notifications : [
            {text: "Project Manager", selected: false},
            {text: "Deputy PM/Construction Manager", selected: false}
        ]
    };

    const bookingApproval: Notifications = {
        text: "Booking Approval Status",
        notifications : [
            {text: "Project Manager", selected: true},
            {text: "Deputy PM/Construction Manager", selected: false}
        ]
    };

    const allNotifications : Notifications[] = [
        machineIlding, bookingSchheduling, bookingApproval
    ];

    const changeStatus = (item: Notification)=>{
        item.selected = !item.selected;
    };

    return (
        <Box className="admin-view">
            <Typography className="heading" variant="h5" component="h2">Notifications</Typography>
            <Divider/>
            {(allNotifications || []).map((notif) => <Box className="sub-section">
                {notif && <Typography className="heading" variant="h6" component="div">{notif.text}</Typography>}
                {(notif.notifications || [] ).map((item, index)=>  
                    <Box className="item">
                        <Checkbox className="item-checkbox" aria-label={item.text} checked={item.selected} onClick={(e)=>changeStatus(item)}/>
                        <Typography variant="body1" >{item.text}</Typography>
                    </Box>
                )}
            </Box>)}
            <Button variant="contained" className="update-changes" sx={{mt:3}}>
                Update Changes
            </Button>
        </Box>
    )
}
