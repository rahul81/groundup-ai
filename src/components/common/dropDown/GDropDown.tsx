import { Box } from '@mui/material'
import React from 'react'

interface DropDownProps {
    className?: string;
    id?: string;
    options?: Array<any>;
    title?: string;
}

export default function GDropDown(props: DropDownProps) {

    const { className='', id='', options=[], title='' } = props;

    return (
        <Box className="dropdown" mr={1}>
            <button className={`btn btn-secondary dropdown-toggle dropdown-button ${className}`} type="button" id={id} data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                    options.map(
                        ({ label, href }) => 
                        <li><a className="dropdown-item" href={href}>{label}</a></li>)
                }
            </ul>
        </Box>
    )
}
