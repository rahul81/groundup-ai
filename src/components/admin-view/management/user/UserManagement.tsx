import { Box, Typography, Divider } from '@mui/material'
import { useState } from 'react'
import { UserManagementColumns, UserManagementRows } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import AddUser from './add-user/AddUser'

export default function UserManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }
    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">User Management</Typography>
            <Divider/>
            <GButton title='Add User' size='small' style={{ display:'block', margin:'10px' }} onClick={()=>setOpen(true)}/>
            <AddUser open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
            <GTable rowClicked={(data: any) => {}} rows={UserManagementRows} columns={UserManagementColumns} />
        </Box>
    )
}
