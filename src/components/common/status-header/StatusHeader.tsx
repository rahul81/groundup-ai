import { Box, Typography } from '@mui/material'
import React from 'react'
import GButton from '../button/GButton';
import './StatusHeader.scss';
import { StatusData } from '../../../mockData/StatusHeaderData';
import GButtonGroup from '../buttonGroup/GButtonGroup';

interface StatusHeader {
    ButtonTitle?: string;
    ButtonGroupTitle?: string;
    options?: Array<any>
}

export default function StatusHeader(props: StatusHeader) {

    const { ButtonTitle = 'Approve', ButtonGroupTitle='More' } = props;

    const options = [
        {
            label:'Reshcedule Booking',
            href:'#'
        },
        {
            label:'Reject Booking',
            href:'#'
        },
        {
            label:'Delete Booking',
            href:'#'
        },
    ]

    return (
        <Box className="status-header-container">
            <Box className="status-header-wrapper">

                {
                    StatusData && StatusData.map(
                        ( {label, value} ) => 
                            <Box className="status-item-container" >
                                <Typography variant="subtitle2" className="status-item-label" >
                                    {label}
                                </Typography>
                                <Typography variant="subtitle2" >
                                    {value}
                                </Typography>
                            </Box> )
                }
            
            </Box>
            <Box className="status-button-container" >
                {true && <GButton title={ButtonTitle} className="status-approve-btn" size='small' />}
                <GButtonGroup title={ButtonGroupTitle} options={options} className={{ buttonClassName: 'gButtonGroup' }} />
            </Box>
        </Box>
    )
}
