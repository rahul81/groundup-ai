import { Box, Typography, Divider, Checkbox } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import GButton from '../../../common/button/GButton';
import GCheckbox from '../../../common/checkobx/GCheckbox';
import '../../admin-view.scss'
import './reports-management.scss'

interface Notification{
    text:string;
    selected:string;
}

interface Notifications{
    text: string
    notifications: Notification[];
}

export default function ReportsManagement() {

    const initialState: any = {
        booking_BS: true,
        booking_BRL: false,
        crane_CUS: false,
        crane_CUR: false,
        crane_IML: false,
        maintainence_PMR: false,
        maintainence_ML: true,
    }

    const booking: Notifications = {
        text: "Booking",
        notifications : [
            {text: "Booking Summary", selected: "booking_BS"},
            {text: "Booking Record list", selected: "booking_BRL"}
        ]
    };

    const crane: Notifications = {
        text: "Crane",
        notifications : [
            {text: "Crane Utilisation Summary", selected: "crane_CUS"},
            {text: "Crane Utilization Records", selected: "crane_CUR"},
            {text: "Indentified Materials List", selected: "crane_IML"}
        ]
    };

    const maintainence: Notifications = {
        text: "Maintainance",
        notifications : [
            {text: "Planned Maintainance Records", selected: "maintainence_PMR"},
            {text: "Materials lifted", selected: "maintainence_ML"}
        ]
    };

    const allNotifications : Notifications[] = [
        booking, crane, maintainence
    ];

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: (data) => {
        },
    });

    return (
        <Box className="reports-view">
            <Typography className="heading" variant="h5" component="h2">Reports Management</Typography>
            <Divider/>
            <form onSubmit={formik.handleSubmit}>
            {(allNotifications || []).map((notif) => <Box className="sub-section">
                {notif && <Typography className="heading" variant="h6" component="div">{notif.text}</Typography>}
                {(notif.notifications || [] ).map((item, index)=>  
                    <Box className="item">                            
                        <GCheckbox 
                        selected={item.selected} 
                        formik={formik} 
                        id={item.selected} 
                        label={item.text}/>
                    </Box>
                )}
            </Box>)}
            <GButton type="submit" title='Save Changes' className="update-changes" />
            </form>

        </Box>
    )
}
