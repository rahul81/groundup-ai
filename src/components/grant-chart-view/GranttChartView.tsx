import { Button, Link, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import './grant-chart-view.scss';
import CriteriaFilter from './criteria-filter/CriteriaFilter';
import React from 'react';
import GranttChart from './grantt-chart/index';

export default function GranttChartView() {
    return (
        <Box className="page-container">
            <Box sx={{ display: 'flex' }} mb={1}>
                <Typography variant="h5" component="h2" className='heading-text'>
                    Grantt Chart
                </Typography>
                <Button variant="contained" startIcon={<AddIcon />}>
                    Request New
                </Button>
            </Box>
            <CriteriaFilter />
            <GranttChart />
        </Box>
    )
}
