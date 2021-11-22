import { Button, Link, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import './booking-view.scss';
import GTable from '../common/table/GTable';
import Filters from './filters/Filters';
import { useState } from 'react';
import RequestNew from './request-new/RequestNew';
import { columns, rows } from '../../mockData/BookingTable';
import GButton from '../common/button/GButton';
import { useHistory } from 'react-router';
import { HOME_BOOKING_REVIEW } from '../../constants/ContextPaths';

export default function BookingView() {
    const [data, setData] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const history = useHistory();

    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }

    const handleSelectData = (data:any)=>{
        setData(data);
        history.push(HOME_BOOKING_REVIEW);
    }

    return (
        <Box className="page-container">
            <Box sx={{ display: 'flex' }} mb={1}>
                <Typography variant="h5" component="h2" className='heading-text'>
                    Crane Bookings
                </Typography>
                <GButton title="Request New" startIcon={<AddIcon />} onClick={()=>setOpen(true)} />
            </Box>
            <Filters/>
            <Box>
                <Box>
                    <GTable rowClicked={(data:any)=>handleSelectData(data)} rows={rows} columns={columns} />
                    <RequestNew open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
                </Box>
            </Box>
        </Box>
    )
}

