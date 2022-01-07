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
import { tConvert, dateFormator } from '../../../src/util/utility'


interface BookingManagementRowsTypes {
    date: string;
    timeStart: string;
    timeEnd: string;
    zone: string;
    crane: {name: string};
    taskType: string,
    status: JSX.Element,
}

interface Column {
    id: "date" | "timeStart" | "timeEnd" | "zone" | "crane" | "taskType" | "status";
    label: string;
    minWidth?: number;
    align?: "right" | "left";
    format?: (value: number) => string;
  }
  
  const columns: Column[] = [
    { id: "date", label: "Date", minWidth:120 },
    { id: "timeStart", label: "Time Start", align: "left"},
    {
      id: "timeEnd",
      label: "Time End",
      align: "left",
    },
    {
      id: "zone",
      label: "Zone",
      align: "left",
    },
    {
      id: "crane",
      label: "Crane",
      align: "left",
    },
    {
      id: "taskType",
      label: "Task Type",
      align: "left",
    },
    {
      id: "status",
      label: "Status",
      align: "left",
    },
  
  ];

export default function BookingView() {
    const [selectData, setSelectData] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const history = useHistory();
    const { search } = useLocation();

    const dispatch = useDispatch();
    const { getBookings } = bindActionCreators(bookingsActionCreators, dispatch)
    const { data, loading, error }: BookingsState = useSelector((state: RootState) => state.bookings);

    const [bookingManagementRows, setBookingManagementRows] = useState<BookingManagementRowsTypes []>([]);
    const tempBookingManagementRows: BookingManagementRowsTypes[] = []

    function Button (Status: string):JSX.Element {

      let button;

      if(Status.toLowerCase() == "rejected"){
        button = <GButton  title='Rejected' color='error' size='small' sx={{width:'100%', textTransform:'capitalize'}} />
      } else if (Status.toLowerCase() == "pending") {
        button = <GButton  title='Pending' size='small' color='secondary' sx={{width:'100%', backgroundColor:'secondary.dark', textTransform:'capitalize'}} />
      } else if (Status.toLowerCase() == "scheduled") {
        button = <GButton  title='Scheduled' color='primary' size='small' sx={{width:'100%', textTransform:'capitalize'}} />
      } else {
        button = <GButton  title={Status} size='small' color='primary' sx={{width:'100%', textTransform:'capitalize'}} />
      }
      return button
    }

    function formatData(
      TimeStart: string,
      TimeEnd: string,
      Zone: string,
      Crane: { name: string },
      TaskType: string,
      Status: string
    ): BookingManagementRowsTypes {
      const date = dateFormator(TimeStart.substring(0, 10).split("-").join(" "))
      const timeStart = tConvert(TimeStart.substring(11, 16));
      const timeEnd = tConvert(TimeEnd.substring(11, 16));
      const zone = Zone;
      const crane = Crane;
      const taskType = TaskType;
      const status = Button(Status)

      return { date, timeStart, timeEnd, zone, crane, taskType, status };
    }

    React.useEffect(() => {
        getBookings()        
    }, [])

    React.useEffect(() => {
        
        (data || []).map((dataOne, index) => {
          // if(dataOne['start_time'] != null && dataOne['end_time'] != null && dataOne['zone'] != null && dataOne['crane_id']['name'] != null && dataOne['tasktype'] != null && dataOne['status'] != null){
          if(dataOne['crane_id'] != null){
          let formattedData = data && formatData(
              dataOne['start_time'], 
              dataOne['end_time'],
              dataOne['zone'],
              dataOne['crane_id']['name'],
              dataOne['tasktype'],
              dataOne['status'],
              )
            tempBookingManagementRows.push(formattedData)
          }    
        })

        setBookingManagementRows(tempBookingManagementRows)
    }, [data])

    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const handleSelectData = (selectData: any) => {
        setSelectData(selectData);
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
                    <GTable rowClicked={(selectData: any) => handleSelectData(selectData)} rows={bookingManagementRows} columns={columns} />
                    <RequestNew open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                </Box>
            </Box>
        </Box>
    )
}

