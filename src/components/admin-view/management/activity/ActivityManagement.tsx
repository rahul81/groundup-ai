import { Box, Typography, Divider } from '@mui/material'
import { useState } from 'react'
import { ActivityColumns, ActivityRows } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import AddActivity from './add-activity/AddActivity'

export default function ActivityManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }
    return (
        <Box className="activity-management-view">
            <Typography className="heading" variant="h5" component="h2">Activity Management</Typography>
            <Divider />
            <GButton title='Add Activity' size='small' style={{ display: 'block', margin: '10px 0' }} onClick={()=>setOpen(true)}/>
            <AddActivity open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
            <GTable rowClicked={(data: any) => { }} rows={ActivityRows} columns={ActivityColumns} />
        </Box>
    )
}
