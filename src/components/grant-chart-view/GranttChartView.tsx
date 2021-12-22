import { Button, Link, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import './grant-chart-view.scss';
import CriteriaFilter from './criteria-filter/CriteriaFilter';
import React, { useEffect, useState } from 'react';
import GranttChart from './grantt-chart/index';
import { bookingsActionCreators, cranesActionCreators } from '../../store/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function GranttChartView() {
    const [date, setDate] = useState<Date | null>(new Date());
    const [crane, setCrane] = useState('')
    const [zone, setZone] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();
    const { getBookings } = bindActionCreators(bookingsActionCreators, dispatch);
    useEffect(() => {
        getBookings();
    }, []);

    const navigateTo = () => history.push('/home/booking?from=chart');

    return (
        <Box className="page-container">
            <Box sx={{ display: 'flex' }} mb={1}>
                <Typography variant="h5" component="h2" className='heading-text'>
                    Grantt Chart
                </Typography>
                <Button variant="contained" startIcon={<AddIcon />} onClick={navigateTo}>
                    Request New
                </Button>
            </Box>
            <CriteriaFilter date={date} setDate={setDate} crane={crane} setCrane={setCrane} zone={zone} setZone={setZone} />
            <GranttChart selectedDate={date} selectedCrane={crane} selectedZone={zone} />
        </Box>
    )
}
