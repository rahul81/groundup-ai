import { Box, Typography } from '@mui/material'
import React from 'react'
import GButton from '../button/GButton';
import './StatusHeader.scss';
import { StatusData } from '../../../mockData/StatusHeaderData';
import GDropDown from '../dropDown/GDropDown';

export default function StatusHeader() {

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
                                <Typography variant="subtitle2" sx={{mb:.5 , fontSize:'small'}} >
                                    {label}
                                </Typography>
                                <Typography variant="subtitle2" >
                                    {value}
                                </Typography>
                            </Box> )
                }
            
            </Box>
            <Box className="status-button-container" >
                {true && <GButton title='Approve' className="status-approve-btn" size='small' />}
                <GDropDown title={'More'} id='dropdownMenuButton1' options={options} />
            </Box>
        </Box>
    )
}
