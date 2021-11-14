import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import React from 'react'
import GToggleButtonGroup, { GToggleButtonOption } from '../../common/toggle-group/GToggleButtonGroup';
import './status-filter.scss'

export default function StatusFilter() {
    const [formats, setFormats] = React.useState<string[]>(()=>[]);
    const options: GToggleButtonOption[] = [
        {value:"all", label:"All"},
        {value:"pending", label:"Pending"},
        {value:"scheduling", label:"Scheduling"},
        {value:"inprogress", label:"In Progress"},
        {value:"rejected", label:"Rejected"},
        {value:"rescheduled", label:"Rescheduled"}
    ];

    return (
        <>
            <GToggleButtonGroup formats={formats} setFormats={setFormats} options={options}/>
        </>
    )
}
