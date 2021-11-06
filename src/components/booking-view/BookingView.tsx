import { Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import './booking-view.scss';
import GTable from '../common/table/GTable';
import Filters from './filters/Filters';

export default function BookingView() {
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
                <GTable/>
            </Box>
        </Box>
    )
}
