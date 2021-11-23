import { Box } from '@mui/material'
import clsx from 'clsx';
import React from 'react'

interface GButtonGroup {
    className?: { buttonClassName?: string, listClassName?: string, optionClassName?: string};
    id?: string;
    options?: Array<any>;
    title?: string;
}

export default function GButtonGroup(props: GButtonGroup) {

    const { className={} , id='', options=[], title='' } = props;
    const { buttonClassName = '', listClassName = '', optionClassName = '' } = className;

    return (
        <Box className="dropdown" mr={1}>
            <button className={clsx('btn dropdown-toggle dropdown-button', buttonClassName)} type="button" id={id} data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </button>
            <ul className={clsx('dropdown-menu', listClassName)} >
                {
                    options && options.map(
                        ({ label, href }) => 
                        <li><a className={clsx("dropdown-item", optionClassName) }href={href}>{label}</a></li>)
                }
            </ul>
        </Box>
    )
}
