import { Box } from '@mui/material'
import React from 'react'
import { Button, Link, Typography } from '@mui/material'
import { HOME_BOOKING } from '../../constants/ContextPaths';
import { useHistory } from 'react-router';
import GPane from '../common/pane/GPane';
import GButton from '../common/button/GButton';
import StatusHeader from '../common/status-header/StatusHeader';

export default function BookingReviewView() {
    const history = useHistory();
    return (
        <>
           <Box sx={{ display: 'flex' }} mb={2}>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                        history.push(HOME_BOOKING)
                    }}
                    >
                        <Typography variant="subtitle2">&lt; Back</Typography>
                </Link>
            </Box>
            <StatusHeader />
            <br/>
            <Box>
                <GPane label="Booking Details">
                    <GButton title='Add Activity' size='small' style={{ display:'block', margin:'10px 0' }} />
                </GPane>
            </Box>
        </>
    )
}
