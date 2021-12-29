import React, { useState, useEffect } from 'react';
import './index.scss';
import GToggleButtonGroup, { GToggleButtonOption } from '../../common/toggle-group/GToggleButtonGroup';
import { LinearProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import ChartRow from './ChartRow';
import { GranttChartData } from './interface';
import GToast from '../../common/toast/GToast';

const totalMinutesInaDay: number = 1440;

const totalMinutesInaWeek: number = 7 * totalMinutesInaDay;

const dayRightColumns: string[] = ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"]

const GranttChart = ({
    selectedDate,
    selectedCrane
}: any) => {

    const [formats, setFormats] = React.useState<string[]>(() => ['day']);

    const [newdata, setData] = useState<GranttChartData[]>([]);

    const [rightColumns, setRightColumns] = useState<string[]>(dayRightColumns);

    const [toastOpen, setToastOpen] = useState<boolean>(true);

    const options: GToggleButtonOption[] = [
        { value: "day", label: "Day" },
        { value: "week", label: "Week" }
    ];

    const weekRightColumns = () => {
        let curr = new Date(selectedDate);
        let week = [];
        if (selectedDate) {
            for (let i = 1; i <= 7; i++) {
                let first = curr.getDate() - curr.getDay() + i
                let day = new Date(curr.setDate(first)).toDateString().slice(0, 10);
                week.push(day)
            }
        }
        return week;
    }

    const reduxState = useSelector((state: RootState) => {
        const { bookings: { data = [], loading = false, error = '' } = {} } = state || {};
        return {
            bookings: data,
            loading,
            error
        }
    });

    const checkForSelctedValuesMatch = (startTime: any, craneName: string) => {
        const startDate = new Date(startTime);
        const selected = selectedDate ? new Date(selectedDate) : null;
        const dateMatched = selected ? (startDate &&
            startDate.getDate() == selected.getDate() &&
            startDate.getMonth() == selected.getMonth() &&
            startDate.getFullYear() == selected.getFullYear()) : false;
        const craneMatched = selectedCrane ? selectedCrane === craneName : true;
        if (
            dateMatched && craneMatched
        ) {
            return true;
        }
        return false;
    }

    const getLeftPercentageDay = (startTime: any) => {
        const startDate = new Date(startTime);
        const timeInMinutes = (startDate.getHours() * 60) + (startDate.getMinutes());
        return (timeInMinutes / totalMinutesInaDay) * 100;
    }

    const getWidthPercentageDay = (startTime: any, endTime: any) => {
        const timediffInMinutes: number = (new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60);
        return (timediffInMinutes / totalMinutesInaDay) * 100;
    }

    const checkForDaysMatch = (startTime: any, craneName: string) => {
        const startDate = new Date(startTime);
        let dateMatched = false;
        const days = weekRightColumns();
        const craneMatched = selectedCrane ? selectedCrane === craneName : true;
        days.map(day => {
            const selectedDay = new Date(day);
            if (!dateMatched)
                dateMatched = startDate ?
                    (startDate.getDate() == selectedDay.getDate() &&
                        startDate.getMonth() == selectedDay.getMonth() &&
                        startDate.getFullYear() == new Date().getFullYear()) : false;
        });
        if (dateMatched && craneMatched)
            return true;
        return false;
    }

    const getLeftPercentageWeek = (startTime: any) => {
        const startDate = new Date(startTime);
        let timeInMinutes = (startDate.getHours() * 60) + (startDate.getMinutes());
        const days = weekRightColumns();
        let minutesToAdd = 0;
        let dateMatched = false;
        days.map(day => {
            const selectedDay = new Date(day);
            if (!dateMatched) {
                dateMatched = startDate ?
                    (startDate.getDate() == selectedDay.getDate() &&
                        startDate.getMonth() == selectedDay.getMonth() &&
                        startDate.getFullYear() == new Date().getFullYear()) : false;
                if (!dateMatched)
                    minutesToAdd += totalMinutesInaDay;
            }

        });
        return ((minutesToAdd + timeInMinutes) / totalMinutesInaWeek) * 100;
    }

    const getWidthPercentageWeek = (startTime: any, endTime: any) => {
        const timediffInMinutes: number = (new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60);
        return (timediffInMinutes / totalMinutesInaWeek) * 100;
    }

    useEffect(() => {
        if (reduxState && reduxState.bookings && reduxState.bookings.length > 0) {
            const { bookings } = reduxState;
            let filteredBookings = [];
            filteredBookings = bookings
                .filter((booking: { crane_id: any; }) => booking.crane_id)
            const timeSelection = formats && formats[0];
            if (timeSelection === 'week') {
                setRightColumns(weekRightColumns);
                filteredBookings = filteredBookings.filter(
                    (booking: { start_time: any, crane_id: { name: string }, zone: string }) => checkForDaysMatch(booking.start_time, booking.crane_id.name)
                ).map((booking:
                    { crane_id: { name: string, _id: string }; zone: string; start_time: any, end_time: any, status: string, createdAt: any }
                ) => {
                    const { crane_id: { name = '', _id = '' } = {}, zone, start_time, end_time, status, createdAt } = booking;
                    let color = 'transparent';
                    if (status === 'Pending' || status === 'Unscheduled') {
                        color = "#b7b7b7"
                    } else if (status === 'Completed') {
                        color = '#3478fc';
                    } else if (status === 'Rescheduled') {
                        color = '#8d3ed4'
                    }
                    return {
                        id: _id,
                        crane: name,
                        location: zone,
                        liftType: "Install Framework",
                        width: getWidthPercentageWeek(start_time, end_time) + '%',
                        left: getLeftPercentageWeek(start_time) + '%',
                        color: color,
                        craneColor: "#ff8d8d",
                        createdAt
                    }
                });

            } else {
                setRightColumns(dayRightColumns);
                filteredBookings = filteredBookings.filter(
                    (booking: { start_time: any, crane_id: { name: string }, zone: string }) => checkForSelctedValuesMatch(booking.start_time, booking.crane_id.name)
                )
                    .map((booking:
                        { crane_id: { name: string, _id: string }; zone: string; start_time: any, end_time: any, status: string, createdAt: any }
                    ) => {
                        const { crane_id: { name = '', _id = '' } = {}, zone, start_time, end_time, status, createdAt } = booking;
                        let color = 'transparent';
                        if (status === 'Pending' || status === 'Unscheduled') {
                            color = "#b7b7b7"
                        } else if (status === 'Completed') {
                            color = '#3478fc';
                        } else if (status === 'Rescheduled') {
                            color = '#8d3ed4'
                        }
                        return {
                            id: _id,
                            crane: name,
                            location: zone,
                            liftType: "Install Framework",
                            width: getWidthPercentageDay(start_time, end_time) + '%',
                            left: getLeftPercentageDay(start_time) + '%',
                            color: color,
                            craneColor: "#ff8d8d",
                            createdAt
                        }
                    });
            }
            setData(filteredBookings);
        }
    }, [reduxState.bookings, formats, selectedDate, selectedCrane])


    const leftColumns: string[] = ["Crane", "Location"];
    return <>
        {reduxState.loading === true ? (<LinearProgress />)
            : reduxState.loading === false && reduxState.error !== '' ? <GToast severity="error" message={reduxState.error} open={toastOpen} notificationToggleState={() => { setToastOpen(false) }} /> :
                <>
                    <Typography variant="h4" className="grantt-chart-heading">All Cranes</Typography>
                    <div className="grantt-chart-header-container">
                        <div className="status-container">
                            <span className="status-text"><span className="status-color" style={{ backgroundColor: "#b7b7b7" }}></span>Pending</span>
                            <span className="status-text"><span className="status-color" style={{ backgroundColor: "#3478fc" }}></span>Completed</span>
                            <span className="status-text"><span className="status-color" style={{ backgroundColor: "#8d3ed4" }}></span>Rescheduled</span>
                        </div>
                        <div>
                            <GToggleButtonGroup formats={formats} setFormats={setFormats} options={options} singleSelect={true} />
                        </div>
                    </div>
                    <div className="grantt-chart-main-container">
                        <div className="single-row">
                            <div className="single-row-left">
                                {
                                    leftColumns.map(leftColumn =>
                                        <div className="single-row-left-text">{leftColumn}</div>
                                    )
                                }
                            </div>
                            <div className="single-row-right">
                                {
                                    rightColumns.map(rightColumn =>
                                        <div>{rightColumn}</div>
                                    )
                                }
                            </div>
                        </div>
                        {
                            (newdata && newdata.length > 0) ? newdata.map(a =>
                                <ChartRow rowData={a} key={a.id + a.crane + a.location + a.createdAt} />
                            ) : <div className='no-data'>No Data Available</div>
                        }
                    </div>
                </>
        }
    </>

}

export default GranttChart;