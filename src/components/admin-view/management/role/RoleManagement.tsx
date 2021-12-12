import { Box, Typography, Divider } from '@mui/material'
import React, { useState } from 'react'
import '../../admin-view.scss'
import { RoleRows, RoleColumns } from '../../../../mockData/AdminPanel';
import GTable from '../../../common/table/GTable';
import GButton from '../../../common/button/GButton';
import AddRole from './add-role/AddRole';
import './role-management.scss'

export default function RoleManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Role Management</Typography>
            <Divider/>
            <GButton title='Add Role' size='small' className='role-management-btn' onClick={()=>setOpen(true)}/>
            <AddRole open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
            <GTable rowClicked={(data: any) => {}} rows={RoleRows} columns={RoleColumns} />
        </Box>
    )
}
