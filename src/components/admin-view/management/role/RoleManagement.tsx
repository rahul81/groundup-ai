import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import '../../admin-view.scss'
import { RoleRows, RoleColumns } from '../../../../mockData/AdminPanel';
import GTable from '../../../common/table/GTable';
import GButton from '../../../common/button/GButton';

export default function RoleManagement() {
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Role Management</Typography>
            <Divider/>
            <GButton title='Add Role' size='small' style={{ display:'block', margin:'10px 0' }} />
            <GTable rowClicked={(data: any) => {}} rows={RoleRows} columns={RoleColumns} />
        </Box>
    )
}
