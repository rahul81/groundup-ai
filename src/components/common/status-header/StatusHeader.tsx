import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import GButton from "../button/GButton";
import "./StatusHeader.scss";
// import { StatusData } from "../../../mockData/StatusHeaderData";
import GButtonGroup from "../buttonGroup/GButtonGroup";
import { bookingReviewActionCreator } from "../../../store/action-creators";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import { UpdateBookingsState } from "../../../store/reducers/bookingReviewReducer";
import { RootState } from "../../../store/reducers";
import { HOME_BOOKING } from "../../../constants/ContextPaths";
import { updateBookingSuccess } from "../../../store/actions/bookingReviewAction";

interface StatusHeader {
    ButtonTitle?: string;
    ButtonGroupTitle?: string;
    options?: Array<any>;
    handleShowDialog?: (data:boolean) => void;
    data: {
        id: string;
        date: string;
        status: { props: { title: string} }
        timeStart: string;
        timeEnd: string;
        zone: string | '';
        crane: string;
        taskType: string;
    }
}


export default function StatusHeader(props: StatusHeader) {

    const history = useHistory();


    //API CALLS
    const dispatch = useDispatch()
    const { updateBookingStatus } = bindActionCreators(bookingReviewActionCreator, dispatch)
    const { data : bookingUpdatedata , error } : UpdateBookingsState = useSelector((state: RootState) => state.bookingUpdates)
    const { success } = bookingUpdatedata;

    //DATA destructuring

    const { data, handleShowDialog = () => {} } = props; 
    const { id } = data;

    const status = data.status.props.title;

    let StatusData = [
        {
            label: "Date",
            value: data.date,
        },
        {
            label: "Time Start",
            value: data.timeStart,
        },
        {
            label: "Time End",
            value: data.timeEnd,
        },
        {
            label: "Zone",
            value: data.zone,
        },
        {
            label: "Crane",
            value: data.crane,
        },
        {
            label: "Task Type",
            value: data.taskType,
        }
    ]

    const { ButtonTitle = "Approve", ButtonGroupTitle = "More" } = props;

    const options = [
        {
            label: "Reschedule Booking",
            href: "#",
        },
        {
            label: "Reject Booking",
            href: "#",
        },
        {
            label: "Delete Booking",
            href: "#",
        },
    ];

    const theme = useTheme();

    const { palette } = theme;

    // Submit actions

    const handleApprove = () => {
        // Updating booking status from 'pending' to 'scheduled' on click of Approve
        updateBookingStatus({id, status: 'Scheduled'}) 
    }

    const handleStatus = (args: string) => {

        if (args.indexOf('Reschedule') !== -1) {
            // updateBookingStatus({id, status:'Rescheduled'})
            handleShowDialog(true)
        } else if(args.indexOf('Reject') !== -1) {
            updateBookingStatus({id, status: 'Rejected'})
        }

    }


    useEffect(() => {
        if (success) {
            history.push(HOME_BOOKING)
            // clean up function to reset booking update reducer message state to false
            dispatch(updateBookingSuccess({message:'Reset after successful update', success:false}))
        }
    }, [success])

    return (
        <Box
            className="status-header-container"
            sx={{ backgroundColor: "secondary.main" }}
        >
            <Box className="status-header-wrapper">
                {StatusData &&
                    StatusData.map(({ label, value }) => (
                        <Box className="status-item-container">
                            <Typography variant="subtitle2" className="status-item-label">
                                {label}
                            </Typography>
                            <Typography variant="subtitle2">{value}</Typography>
                        </Box>
                    ))}
            </Box>
            <Box className="status-button-container">
                {status.toLowerCase() === 'pending' && (
                    <GButton
                        title={ButtonTitle}
                        className="status-approve-btn"
                        size="small"
                        color="success"
                        onClick={handleApprove}
                    />
                )}
                <GButtonGroup
                    title={ButtonGroupTitle}
                    options={options}
                    className={{ buttonClassName: "gButtonGroup" }}
                    btnStyle={{ backgroundColor: palette.primary.main, color: "white" }}
                    onClick={handleStatus}
                />
            </Box>
        </Box>
    );
}
