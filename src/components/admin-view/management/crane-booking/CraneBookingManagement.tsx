import { Box, Typography, Divider, Button } from '@mui/material'
import React from 'react'
import { CraneUsageRows, CraneManagementColumns } from '../../../../mockData/AdminPanel'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'


export default function CraneBookingManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Crane Booking Management</Typography>
            <Divider/>
            <Button variant="contained" size='small' style={{ display:'block', margin:'10px 0' }}>
                Add Sub Contractors
            </Button>
            <GTable rowClicked={(data: any) => {}} rows={CraneUsageRows} columns={CraneManagementColumns} />
        </Box>
    )
}
