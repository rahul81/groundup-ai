import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { MaintenanceColumns, MaintenanceRows } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'

export default function MaintenanceManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Maintenance Management</Typography>
            <Divider/>
            <GButton title='Add Schedule' size='small' style={{ display:'block', margin:'10px 0' }} />
            <GTable rowClicked={(data: any) => {}} rows={MaintenanceRows} columns={MaintenanceColumns} />
        </Box>
    )
}
