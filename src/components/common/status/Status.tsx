import { Typography } from '@mui/material'
import './status.scss'
import Button from '../button/GButton'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box } from '@mui/system';

// To use different colors for Rejected and Over-run
// Use classname prop
//     1. btn-over-run
//     2. btn-rejected

// For getting highlighted button use 
//  const StausSteps: GStatusSteps[] = [{ key: 1, value: 'Pending' }]

// For getting outlined button use 
//  const StausSteps: GStatusSteps[] = [{ key: 2, value: 'Scheduled', color: 'inherit', variant: 'outlined' }]

export interface GStatusSteps {
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: "text" | "outlined" | "contained";
    key: string | number;
    value: string;
    className?: "btn-over-run" | "btn-rejected"
}

interface GStatusProps {
    steps: GStatusSteps[];
    title?: string;
}

function GStatus({ title, steps }: GStatusProps) {
    return (
        <Box className="booking-status">
            {title && <Typography className="caption" >{title}</Typography>}

            <Box className="booking-status-buttons">
                {(steps).map((item, index) =>
                    <>
                        <Button className={item.className} title={item.value} variant={item.variant} color={item.color} />
                        {(steps.length - 1 != index) && <ArrowRightIcon />}
                    </>
                )}
            </Box>
        </Box >
    )
}

export default GStatus
