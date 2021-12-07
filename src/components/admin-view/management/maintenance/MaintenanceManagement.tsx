import { Box, Typography, Divider } from '@mui/material'
import React, { useState } from 'react'
import { MaintenanceColumns, MaintenanceRows } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import AddSchedule from './add-schedule/AddSchedule'

export default function MaintenanceManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Maintenance Management</Typography>
            <Divider/>
            <GButton title='Add Schedule' size='small' style={{ display:'block', margin:'10px 0' }} onClick={()=>setOpen(true)}/>
            <AddSchedule open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
            <GTable rowClicked={(data: any) => {}} rows={MaintenanceRows} columns={MaintenanceColumns} />
        </Box>
    )
}
