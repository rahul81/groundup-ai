import { Box, Typography, Divider } from '@mui/material'
import React, { useState } from 'react'
import '../../admin-view.scss'
import { CompanyRows, CompanyColumns } from '../../../../mockData/AdminPanel';
import GTable from '../../../common/table/GTable';
import GButton from '../../../common/button/GButton';
import AddCompany from './add-company/AddCompany';
import './company-management.scss'

export default function CompanyManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }
    return (
        <Box className="company-management-view">
            <Typography className="heading" variant="h5" component="h2">Company Management</Typography>
            <Divider/>
            <GButton title='Add Comapny' size='small' className='company-management-btn' onClick={()=>setOpen(true)}/>
            <AddCompany open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
            <GTable rowClicked={(data: any) => {}} rows={CompanyRows} columns={CompanyColumns} />
        </Box>
    )
}
