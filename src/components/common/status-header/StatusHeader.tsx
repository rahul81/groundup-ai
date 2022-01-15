import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import GButton from "../button/GButton";
import "./StatusHeader.scss";
// import { StatusData } from "../../../mockData/StatusHeaderData";
import GButtonGroup from "../buttonGroup/GButtonGroup";
import { useSelector } from "react-redux";
import { BookingReviewState } from "../../../store/reducers/bookingReviewReducer";
import { RootState } from "../../../store/reducers";

interface StatusHeader {
    ButtonTitle?: string;
    ButtonGroupTitle?: string;
    options?: Array<any>;
}

interface BookingReviewData {
    crane: string,
    date: string,
    status: React.ElementType,
    tastType: string,
    timeStart: string,
    timeEnd: string,
    zone: string
}

export default function StatusHeader(props: StatusHeader) {
    const { data, error }: BookingReviewState = useSelector(
        (state: RootState) => state.bookingReview
    );

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
            label: "Reshcedule Booking",
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
                {true && (
                    <GButton
                        title={ButtonTitle}
                        className="status-approve-btn"
                        size="small"
                        color="success"
                    />
                )}
                <GButtonGroup
                    title={ButtonGroupTitle}
                    options={options}
                    className={{ buttonClassName: "gButtonGroup" }}
                    btnStyle={{ backgroundColor: palette.primary.main, color: "white" }}
                />
            </Box>
        </Box>
    );
}
