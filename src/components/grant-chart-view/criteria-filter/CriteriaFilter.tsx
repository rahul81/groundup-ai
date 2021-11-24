import { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';
import { GDatePicker } from '../../common/date-picker/GDatePicker';
import GSelect, { GSelectOption } from '../../common/select/Gselect';

export default function CriteriaFilter() {
    const [crane, setCrane] = useState('')
    const [zone, setZone] = useState('');
    const [date, setDate] = useState<Date | null>(null);
    const cranes: GSelectOption[] = [
        { key: "crane1", value: "Crane1" },
        { key: "crane2", value: "Crane2" },
        { key: "crane3", value: "Crane3" }
    ];
    const zones: GSelectOption[] = [
        { key: "zone1", value: "Zone1" },
        { key: "zone2", value: "Zone2" },
        { key: "zone3", value: "Zone3" }
    ];

    const handleChangeCrane = (value: string) => {
        setCrane(value);
    };
    const handleChangeZone = (value: string) => {
        setZone(value);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }} mb={1}>
                <Box className="dropdown" mr={1}>
                    <GDatePicker date={date} onChange={setDate} dateDelete={true} />
                </Box>
                <Box className="dropdown" mr={1}>
                    <GSelect id="Crane" placeholder="Select Crane" options={cranes} onChange={handleChangeCrane} value={crane} />
                </Box>
                <Box className="dropdown" mr={1}>
                    <GSelect id="Crane" placeholder="Select Zone" options={zones} onChange={handleChangeZone} value={zone} />
                </Box>
            </Box>
        </>
    )
}
