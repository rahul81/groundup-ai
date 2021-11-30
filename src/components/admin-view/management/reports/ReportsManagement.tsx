import { Box, Typography, Divider, Checkbox } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import GButton from '../../../common/button/GButton';
import GCheckbox from '../../../common/checkobx/GCheckbox';
import '../../admin-view.scss'

interface Notification{
    text:string;
    checkedUnchecked:string;
}

interface Notifications{
    text: string
    notifications: Notification[];
}

export default function ReportsManagement() {

    const checkedUnchecked: any = {
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
            {text: "Booking Summary", checkedUnchecked: "booking_BS"},
            {text: "Booking Record list", checkedUnchecked: "booking_BRL"}
        ]
    };

    const crane: Notifications = {
        text: "Crane",
        notifications : [
            {text: "Crane Utilisation Summary", checkedUnchecked: "crane_CUS"},
            {text: "Crane Utilization Records", checkedUnchecked: "crane_CUR"},
            {text: "Indentified Materials List", checkedUnchecked: "crane_IML"}
        ]
    };

    const maintainence: Notifications = {
        text: "Maintainance",
        notifications : [
            {text: "Planned Maintainance Records", checkedUnchecked: "maintainence_PMR"},
            {text: "Materials lifted", checkedUnchecked: "maintainence_ML"}
        ]
    };

    const allNotifications : Notifications[] = [
        booking, crane, maintainence
    ];

    const formik = useFormik({
        initialValues: checkedUnchecked,
        onSubmit: (data) => {
            console.log(data);
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
                        checkedUncheckedState={item.checkedUnchecked} 
                        formik={formik} 
                        id={item.checkedUnchecked} 
                        label={item.text}/>
                    </Box>
                )}
            </Box>)}
            <GButton type="submit" title='Save Changes' className="update-changes" sx={{mt:3}} />
            </form>

        </Box>
    )
}
