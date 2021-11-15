import { Box, Typography, Divider, Checkbox } from '@mui/material'
import React from 'react'
import GButton from '../../../common/button/GButton';
import '../../admin-view.scss'

interface Notification{
    text:string;
    selected:boolean;
}

interface Notifications{
    text: string
    notifications: Notification[];
}

export default function ReportsManagement() {

    const booking: Notifications = {
        text: "Booking",
        notifications : [
            {text: "Booking Summary", selected: true},
            {text: "Booking Record list", selected: false}
        ]
    };

    const crane: Notifications = {
        text: "Crane",
        notifications : [
            {text: "Crane Utilisation Summary", selected: false},
            {text: "Crane Utilization Records", selected: false},
            {text: "Indentified Materials List", selected: false}
        ]
    };

    const maintainence: Notifications = {
        text: "Maintainance",
        notifications : [
            {text: "Planned Maintainance Records", selected: true},
            {text: "Materials lifted", selected: false}
        ]
    };

    const allNotifications : Notifications[] = [
        booking, crane, maintainence
    ];

    const changeStatus = (item: Notification)=>{
        item.selected = !item.selected;
    };

    return (
        <Box className="reports-view">
            <Typography className="heading" variant="h5" component="h2">Reports Management</Typography>
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
            <GButton title='Save Changes' className="update-changes" sx={{mt:3}} />
        </Box>
    )
}
