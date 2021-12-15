import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { CraneUsageRows, CraneManagementColumns } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import './crane-booking.scss'

export default function CraneBookingManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Crane Booking Management</Typography>
            <Divider/>
            <GButton title='Add Sub Contractors' size='small' className='crane-management-btn add-button' />
            <GTable rowClicked={(data: any) => {}} rows={CraneUsageRows} columns={CraneManagementColumns} />
        </Box>
    )
}
