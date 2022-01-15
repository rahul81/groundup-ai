import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { SetStateAction } from 'react'
import GToggleButtonGroup, { GToggleButtonOption } from '../../../common/toggle-group/GToggleButtonGroup';

import './status-filter.scss'


interface StatusFilterProps {
    formats: Array<string>,
    setFormats: React.Dispatch<SetStateAction<string[]>>
}


export default function StatusFilter(props: StatusFilterProps) {

    const {formats, setFormats} = props;

    const options: GToggleButtonOption[] = [
        { value: "all", label: "All" },
        { value: "pending", label: "Pending" },
        { value: "scheduling", label: "Scheduling" },
        { value: "inprogress", label: "In Progress" },
        { value: "rejected", label: "Rejected" },
        { value: "rescheduled", label: "Rescheduled" }
    ];

    console.log("formats", formats)

    return (
        <>
            <GToggleButtonGroup formats={formats} setFormats={setFormats} options={options} />
        </>
    )
}
