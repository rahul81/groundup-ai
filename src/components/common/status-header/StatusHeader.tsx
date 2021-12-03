import { Box, Typography, useTheme } from '@mui/material'
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

    const theme = useTheme();

    const { palette } = theme;

    return (
        <Box className="status-header-container" sx={{backgroundColor:'secondary.main'}}>
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
                {true && <GButton title={ButtonTitle} className="status-approve-btn" size='small' color='success' />}
                <GButtonGroup title={ButtonGroupTitle} options={options} className={{ buttonClassName: 'gButtonGroup' }} btnStyle={{backgroundColor: palette.primary.main, color:'white'}} />
            </Box>
        </Box>
    )
}
