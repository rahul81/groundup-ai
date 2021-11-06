import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import '../../admin-view.scss'

export default function ActivityManagement() {
    return (
        <Box className="activity-management-view">
            <Typography className="heading" variant="h5" component="h2">Activity Management</Typography>
            <Divider/>
        </Box>
    )
}
