import { Button, Link, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import './booking-view.scss';
import GTable from '../common/table/GTable';
import Filters from './filters/Filters';
import { useState } from 'react';

export default function BookingView() {
    const [data, setData] = useState<any>(null);

    return (
        <Box className="page-container">
            <Box sx={{ display: 'flex' }} mb={1}>
                <Typography variant="h5" component="h2" className='heading-text'>
                    Crane Bookings
                </Typography>
                <Button variant="contained" startIcon={<AddIcon />}>
                    Request New
                </Button>
            </Box>
            <Filters/>
            <Box>
                {!data && <Box>
                    <GTable rowClicked={(data:any)=>setData(data)}/>
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
