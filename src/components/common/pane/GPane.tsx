import { Box } from '@mui/system'
import './g-pane.scss';
import GSelect, { GSelectOption } from '../select/GSelect'
import { Typography } from '@mui/material';
import { FormikValues, FormikProps } from 'formik';

interface GPaneProps{
    label?:string
    children: React.ReactNode;
}

export default function GPane({label, children}:GPaneProps) {
    return (
        <>
            <Box className="header">
                {label && <Typography variant="paneheader">{label}</Typography>}
            </Box>
            <Box className="content">
                {children}
            </Box>
        </>
    )
}
