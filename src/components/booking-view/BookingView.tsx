import { Button, Link, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import './booking-view.scss';
import GTable from '../common/table/GTable';
import Filters from './filters/Filters';
import { useState } from 'react';
import RequestNew from './request-new/RequestNew';
import GButton from '../common/button/GButton';
import { useHistory, useLocation } from 'react-router';
import { HOME_BOOKING_REVIEW } from '../../constants/ContextPaths';
import React from 'react';
import { RootState } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux'
import { bookingsActionCreators } from '../../store/action-creators'
import { bindActionCreators } from 'redux'
import { BookingsState } from '../../store/reducers/bookings'
import { composeWithDevTools } from "redux-devtools-extension";


interface BookingManagementRowsTypes {
    date: string;
    timeStart: string;
    timeEnd: string;
    zone: string;
    crane: string;
    taskType: string,
    status: string,
}

interface Data {
    DateString: string;
    TimeStart: string;
    TimeEnd: string;
    Zone: string;
    Crane: { name : string};
    TaskType: string;
    Status: JSX.Element;
  }

interface Column {
    id: "DateString" | "TimeStart" | "TimeEnd" | "Zone" | "Crane" | "TaskType" | "Status";
    label: string;
    minWidth?: number;
    align?: "right" | "left";
    format?: (value: number) => string;
  }
  
  const columns: Column[] = [
    { id: "DateString", label: "Date", minWidth:120 },
    { id: "TimeStart", label: "Time Start", align: "left"},
    {
      id: "TimeEnd",
      label: "Time End",
      align: "left",
    },
    {
      id: "Zone",
      label: "Zone",
      align: "left",
    },
    {
      id: "Crane",
      label: "Crane",
      align: "left",
    },
    {
      id: "TaskType",
      label: "Task Type",
      align: "left",
    },
    {
      id: "Status",
      label: "Status",
      align: "left",
    },
  
  ];

export default function BookingView() {
    const [datas, setData] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const history = useHistory();
    const { search } = useLocation();

    const dispatch = useDispatch();
    const { getBookings } = bindActionCreators(bookingsActionCreators, dispatch)
    const { data, loading, error }: BookingsState = useSelector((state: RootState) => state.bookings);

    const [bookingManagementRows, setBookingManagementRows] = useState<Data []>([]);
    const tempBookingManagementRows: Data[] = []

    function tConvert (timeString:string) {
      const H = +timeString.substr(0, 2);
      const h = H % 12 || 12;
      const ampm = (H < 12 || H === 24) ? " AM" : " PM";
      return ( h + timeString.substr(2, 3) + ampm )
    }

    function dateFormator (date : string){
 
      const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

      let dateMonth = parseInt(date.substring(5,7))
      const selectedMonthName = months[dateMonth - 1];
      const finalDate = date.substring(0,5) + selectedMonthName.toString() + date.substring(7,10)
      
      return finalDate 
    }

    function formatData(
      date: string,
      timeStart: string,
      timeEnd: string,
      zone: string,
      crane: { name: string },
      taskType: string,
      status: JSX.Element
    ): Data {
      const DateString = dateFormator(date.substring(0, 10).split("-").join(" "))
      const TimeStart = tConvert(timeStart.substring(11, 16));
      const TimeEnd = tConvert(timeEnd.substring(11, 16));
      const Zone = zone;
      const Crane = crane;
      const TaskType = taskType;
      const Status = (
        <GButton
          title="pending"
          size="small"
          color="secondary"
          sx={{
            width: "100%",
            backgroundColor: "secondary.dark",
            textTransform: "capitalize",
          }}
        />
      );

      return { DateString, TimeStart, TimeEnd, Zone, Crane, TaskType, Status };
    }

    React.useEffect(() => {
        getBookings()        
    }, [])

    React.useEffect(() => {
        
        (data || []).map((dataOne, index) => {
            let formattedData = formatData(
              dataOne['start_time'], 
              dataOne['start_time'],
              dataOne['end_time'],
              dataOne['zone'],
              dataOne['crane_id']['name'],
              dataOne['tasktype'],
              dataOne['status'],
              )
            tempBookingManagementRows.push(formattedData)
        })

        setBookingManagementRows(tempBookingManagementRows)
        setTimeout(() => {console.log("temp",tempBookingManagementRows)}, 3000) 
    }, [data])

    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const handleSelectData = (datas: any) => {
        setData(datas);
        history.push(HOME_BOOKING_REVIEW);
    }

    React.useEffect(() => {
        let query = new URLSearchParams(search);
        if (query && query.get('from') === 'chart') {
            setOpen(true);
        }
    }, [])

    return (
        <Box className="page-container">
            <Box sx={{ display: 'flex' }} mb={1}>
                <Typography variant="h5" component="h2" className='heading-text'>
                    Crane Bookings
                </Typography>
                <GButton title="Request New" startIcon={<AddIcon />} onClick={() => setOpen(true)} />
            </Box>
            <Filters />
            <Box>
                <Box>
                    <GTable rowClicked={(datas: any) => handleSelectData(datas)} rows={bookingManagementRows} columns={columns} />
                    <RequestNew open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                </Box>
            </Box>
        </Box>
    )
}

