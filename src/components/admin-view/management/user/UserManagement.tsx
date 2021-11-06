import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import '../../admin-view.scss'

export default function UserManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">User Management</Typography>
            <Divider/>
        </Box>
    )
}
