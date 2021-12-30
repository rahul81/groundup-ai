import { Box, Typography, Divider } from '@mui/material'
import React, { useState } from 'react'
import { CraneUsageRows, CraneManagementColumns } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import AddCrane from './add-crane/AddCrane'
import './crane-booking.scss'

export default function CraneBookingManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Crane Booking Management</Typography>
            <Divider />
            <GButton title='Add Crane' size='small' className='crane-management-btn add-button' onClick={() => setOpen(true)}/>
            <GTable rowClicked={(data: any) => { }} rows={CraneUsageRows} columns={CraneManagementColumns} />

            {/*  Dialogs */}
            <AddCrane open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
        </Box>
    )
}
