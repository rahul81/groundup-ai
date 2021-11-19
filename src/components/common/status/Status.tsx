import { Typography } from '@mui/material'
import './status.scss'
import Button from '../button/GButton'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box } from '@mui/system';

interface statusProps {
    status: "Pending" | "Scheduled" | "In-Progress" | "Completed" | "Over-Run" | "Rescheduled"
}

function Status(props: statusProps) {
    const {
        status = {}
    } = props;

    return (
        <Box className="booking-status">
            <Typography>Status </Typography>
            <Box className="booking-status-buttons">

                <Button title="Pending"
                    color={status === "Pending" ? `primary` : `inherit`} variant={status === "Pending" ? `contained` : `outlined`} />
                <ArrowRightIcon />

                <Button title="Scheduled"
                    color={status === "Scheduled" ? `primary` : `inherit`} variant={status === "Scheduled" ? `contained` : `outlined`} />
                <ArrowRightIcon />

                <Button title="In-Progress"
                    color={status === "In-Progress" ? `primary` : `inherit`} variant={status === "In-Progress" ? `contained` : `outlined`} />
                <ArrowRightIcon />

                <Button title="Completed"
                    color={status === "Completed" ? `primary` : `inherit`} variant={status === "Completed" ? `contained` : `outlined`} />

                {status === "Over-Run" &&
                    <Box>
                        <ArrowRightIcon />
                        <Button color="inherit" className="btn-over-run" title="Over-Run" />
                    </Box>
                }

            </Box>

            {status === "Rescheduled" &&
                <Box className="booking-status-buttons">
                    <Button title="Rescheduled" color="primary" />
                </Box>
            }


        </Box>
    )
}

export default Status
