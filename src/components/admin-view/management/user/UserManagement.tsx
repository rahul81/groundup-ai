import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { UserManagementColumns, UserManagementRows } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'

export default function UserManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">User Management</Typography>
            <Divider/>
            <GButton title='Add User' size='small' style={{ display:'block', margin:'10px 0' }} />
            <GTable rowClicked={(data: any) => {}} rows={UserManagementRows} columns={UserManagementColumns} />
        </Box>
    )
}
