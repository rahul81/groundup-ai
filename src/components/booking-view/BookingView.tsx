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

export default function BookingView() {
    const [data, setData] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }

    return (
        <Box className="page-container">
            {!data && <Box sx={{ display: 'flex' }} mb={1}>
                <Typography variant="h5" component="h2" className='heading-text'>
                    Crane Bookings
                </Typography>
                <GButton title="Request New" startIcon={<AddIcon />} onClick={()=>setOpen(true)} />
            </Box>}
            {!data && <Filters/>}
            <Box>
                {!data && <Box>
                    <GTable rowClicked={(data:any)=>(data)} rows={rows} columns={columns} />
                    <RequestNew open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
                </Box>}
                {data && <Box sx={{ display: 'flex' }}>
                    <Link
                        component="button"
                        variant="body2"
                        underline="none"
                        onClick={() => {
                            setData(null)
                        }}
                        >
                         &lt; back
                    </Link>
                </Box>}
            </Box>
        </Box>
    )
}
