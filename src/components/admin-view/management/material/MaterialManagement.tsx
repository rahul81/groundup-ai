import { Box, Typography, Divider, Button } from '@mui/material'
import React from 'react'
import '../../admin-view.scss'
import { MaterialRows, MaterialColumns } from '../../../../mockData/AdminPanel'
import GTable from '../../../common/table/GTable'

export default function MaterialManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Material Management</Typography>
            <Divider/>
            <Button variant="contained" size='small' style={{ display:'block', margin:'10px 0' }} >
                Add Materials
            </Button>
            <GTable rowClicked={(data: any) => {}} rows={MaterialRows} columns={MaterialColumns} />
        </Box>
    )
}