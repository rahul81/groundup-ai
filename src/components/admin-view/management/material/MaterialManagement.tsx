import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import '../../admin-view.scss'
import { MaterialRows, MaterialColumns } from '../../../../mockData/AdminPanel'
import GTable from '../../../common/table/GTable'
import GButton from '../../../common/button/GButton'

export default function MaterialManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Material Management</Typography>
            <Divider/>
            <GButton title='Add Materials' size='small' style={{ display:'block', margin:'10px 0' }} />
            <GTable rowClicked={(data: any) => {}} rows={MaterialRows} columns={MaterialColumns} />
        </Box>
    )
}