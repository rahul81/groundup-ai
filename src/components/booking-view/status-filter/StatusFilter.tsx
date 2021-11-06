import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import React from 'react'
import './status-filter.scss'

export default function StatusFilter() {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
    };
    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="Statusfilter"
            className="status-filter"
        >
            <ToggleButton value="all" aria-label="all">
                All
            </ToggleButton>
            <ToggleButton value="pending" aria-label="pending">
                Pending
            </ToggleButton>
            <ToggleButton value="scheduling" aria-label="scheduling">
                Scheduling
            </ToggleButton>
            <ToggleButton value="inprogress" aria-label="inprogress">
                In Progress
            </ToggleButton>
            <ToggleButton value="rejected" aria-label="rejected">
                Rejected
            </ToggleButton>
            <ToggleButton value="rescheduled" aria-label="rescheduled">
                Rescheduled
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
