import { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { GDatePicker } from '../../../common/date-picker/GDatePicker';

export default function CriteriaFilter() {
    const [crane, setCrane] = useState('')
    const [zone, setZone] = useState('');
    const [date, setDate] = useState(new Date());
    
    const handleChangeCrane = (event: SelectChangeEvent) => {
        setCrane(event.target.value);
    };
    const handleChangeZone = (event: SelectChangeEvent) => {
        setZone(event.target.value);
    };
    
    return (
        <>
            <Box className="dropdown" mr={1}>
                <GDatePicker date={date} onChange={setDate}/>
            </Box>
            <Box className="dropdown" mr={1}>
                <button className="btn btn-secondary dropdown-toggle dropdown-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Crane
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Crane 1</a></li>
                    <li><a className="dropdown-item" href="#">Crane 2</a></li>
                    <li><a className="dropdown-item" href="#">Crane 3</a></li>
                </ul>
            </Box>
            <Box className="dropdown" mr={1}>
                <button className="btn btn-secondary dropdown-toggle dropdown-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Zone
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Zone 1</a></li>
                    <li><a className="dropdown-item" href="#">Zone 2</a></li>
                    <li><a className="dropdown-item" href="#">Zone 3</a></li>
                </ul>
            </Box>
        </>
    )
}
