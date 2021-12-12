import { Box, Typography, Divider } from '@mui/material'
import React, { useState } from 'react'
import '../../admin-view.scss'
import { MaterialRows, MaterialColumns } from '../../../../mockData/AdminPanel'
import GTable from '../../../common/table/GTable'
import GButton from '../../../common/button/GButton'
import AddMaterial from './add-material/AddMaterial'
import './material-management.scss'

export default function MaterialManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">Material Management</Typography>
            <Divider />
            <GButton title='Add Materials' size='small' className='material-management-btn' onClick={()=>setOpen(true)}/>
            <AddMaterial open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
            <GTable rowClicked={(data: any) => { }} rows={MaterialRows} columns={MaterialColumns} />
        </Box>
    )
}