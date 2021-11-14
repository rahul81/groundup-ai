import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import React from 'react'
import './g-toggle-button-group.scss'

export interface GToggleButtonOption{
    value: string;
    label: string;
}

interface GToggleButtonGroupProps{
    formats: string[];
    setFormats: (formats:string[])=> void;
    options: GToggleButtonOption[];
}

export default function GToggleButtonGroup({options, formats, setFormats}: GToggleButtonGroupProps) {
    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
    };
    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="custom-toggle-button-group"
            className="group-filter">
            {(options || []).map(item=><ToggleButton value={item.value} aria-label={item.value}>
                {item.label}
            </ToggleButton>)}
        </ToggleButtonGroup>
    )
}
