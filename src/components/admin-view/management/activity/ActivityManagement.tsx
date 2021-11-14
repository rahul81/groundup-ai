import { Box, Typography, Divider, Button } from '@mui/material'
import React from 'react'
import { ActivityColumns, ActivityRows } from '../../../../mockData/AdminPanel'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'

export default function ActivityManagement() {
    return (
        <Box className="activity-management-view">
            <Typography className="heading" variant="h5" component="h2">Activity Management</Typography>
            <Divider/>
            <Button variant="contained" size='small' style={{ display:'block', margin:'10px 0' }} >
                Add Activity
            </Button>
            <GTable rowClicked={(data: any) => {}} rows={ActivityRows} columns={ActivityColumns} />
        </Box>
    )
}
