import { Box, Typography, Divider, Button } from '@mui/material'
import React from 'react'
import { UserManagementColumns, UserManagementRows } from '../../../../mockData/AdminPanel'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'

export default function UserManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">User Management</Typography>
            <Divider/>
            <Button variant="contained" size='small' style={{ display:'block', margin:'10px 0' }} >
                Add User
            </Button>
            <GTable rowClicked={(data: any) => {}} rows={UserManagementRows} columns={UserManagementColumns} />
        </Box>
    )
}
