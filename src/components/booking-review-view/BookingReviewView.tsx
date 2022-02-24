import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Link, Typography } from "@mui/material";
import { HOME_BOOKING } from "../../constants/ContextPaths";
import { useHistory } from "react-router";
import GPane from "../common/pane/GPane";
import GButton from "../common/button/GButton";
import StatusHeader from "../common/status-header/StatusHeader";
import GStatus, { GStatusSteps } from "../common/status/Status";
import { GFormInput } from "../common/input/GInput";
import { bookingReviewValidationSchema } from "./BookingReviewFormValidations";
import GFormDatePicker from "../common/date-picker/GDatePicker";
import { GTextarea } from "../common/textarea/GTextarea";
import GTable from "../common/table/GTable";
import { StatusData } from "../../mockData/StatusHeaderData";
import { useSelector } from "react-redux";
import { BookingReviewState } from "../../store/reducers/bookingReviewReducer";
import { RootState } from "../../store/reducers";

var status: GStatusSteps[] = [];


interface Column {
  id:
    | "timeStart"
    | "timeEnd"
    | "duration"
    | "material_identified"
    | "status"
    | "footage";
  label: string;
  minWidth?: number;
  align?: "right" | "left";
  format?: (value: number) => string;
}

const columns: Column[] = [
  {
    id: "timeStart",
    label: "Time Start",
    align: "left",
  },
  {
    id: "timeEnd",
    label: "Time End",
    align: "left",
  },
  {
    id: "duration",
    label: "Duration",
    align: "left",
  },
  {
    id: "material_identified",
    label: "Material Identified",
    align: "left",
  },
  {
    id: "status",
    label: "Status",
    align: "left",
  },
  {
    id: "footage",
    label: "Footage",
    align: "left",
  },
];

interface rowTypes {
  timeStart: string;
  timeEnd: string;
  duration: string;
  material_identified: string;
  status: string;
  footage: string;
}

const rows: rowTypes[] = [
  // {
  //   timeStart: "12 Jun 2022",
  //   timeEnd: "12 Jun 2022",
  //   duration: "10 Hours",
  //   material_identified: "Rock",
  //   status: "Pending",
  //   footage: "Road",
  // },
];

const date = StatusData.find((item) => item.label == "Date");
// console.log("Date", date);

interface BookingReviewFormType {
  location: string;
  crane: string;
  activity_type: string;
  description: string;
  start_time: Date;
  end_time: Date;

  add_comment: string;
}

export default function BookingReviewView() {
  const history = useHistory();

  const { data, error }: BookingReviewState = useSelector(
    (state: RootState) => state.bookingReview
  );

  React.useEffect(() => {

    status = []

    if (['pending', 'completed','scheduled', 'rescheduled','in-progress'].includes(data.status.props.title.toLocaleLowerCase())){

      let statusArray = ['Pending','Scheduled','In-Progress','Completed']

      statusArray.forEach(statusItem => {

        if (data.status.props.title.toLocaleLowerCase() === statusItem.toLocaleLowerCase()){

          status.push({key:statusItem,value:statusItem,color:'primary'})
          
        } 
        else if (data.status.props.title.toLocaleLowerCase() === 'rescheduled' && statusItem === 'Scheduled'){
          status.push({key:'Rescheduled',value:'Rescheduled',color:'primary'})
        }
        else {
          
          status.push({key:statusItem,value:statusItem,variant:'outlined'})
        }
      })

    } else if (['rejected'].includes(data.status.props.title.toLocaleLowerCase())){

      let statusArray = ['Pending','Scheduled','In-Progress','Rejected']
      
      statusArray.forEach(statusItem => {

        if (data.status.props.title.toLocaleLowerCase() === statusItem.toLocaleLowerCase()){

          status.push({key:statusItem,value:statusItem,color:'error'})
          
        }else{
          
          status.push({key:statusItem,value:statusItem,variant:'outlined'})
        }
      })
    }

  },[data])
  

  
  

  const initialValues: BookingReviewFormType = {
    location: "",
    crane: "",
    activity_type: "",
    description: "",
    start_time: new Date(),
    end_time: new Date(),
    add_comment: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: bookingReviewValidationSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });

  return (
    <>
      <Box sx={{ display: "flex" }} mb={2}>
        <Link
          component="button"
          variant="body2"
          underline="none"
          onClick={() => {
            history.push(HOME_BOOKING);
          }}
        >
          <Typography variant="subtitle2">&lt; Back</Typography>
        </Link>
      </Box>
      <br />
      <StatusHeader data={data}/>
      <br />
      <GStatus title="Status" steps={status} />
      <br />
      <Box>
        <GPane label="Booking Details">
          <form
            id="request-new-form"
            className="groundup-form"
            onSubmit={formik.handleSubmit}
          >
            <GFormInput<BookingReviewFormType>
              formik={formik}
              id="location"
              label="Location"
            />

            <GFormInput<BookingReviewFormType>
              formik={formik}
              id="crane"
              label="Crane"
            />

            <GFormInput<BookingReviewFormType>
              formik={formik}
              id="activity_type"
              label="Activity Type"
            />

            <GTextarea<BookingReviewFormType>
              formik={formik}
              id="description"
              label="Description"
              fullWidth={true}
            />

            <Grid xs={8} container>
              <Grid xs={3}>
                <GFormDatePicker<BookingReviewFormType>
                  formik={formik}
                  id="start_time"
                  label="Time Start"
                  timeonly={true}
                />
              </Grid>
              <Grid xs={3}>
                <GFormDatePicker<BookingReviewFormType>
                  formik={formik}
                  id="end_time"
                  label="End Start"
                  timeonly={true}
                />
              </Grid>
            </Grid>
          </form>
        </GPane>
        <br />
        <GPane label="Schedule">
          <GTable rows={rows} columns={columns} />
        </GPane>

        {/* <GPane label="Activity">

        </GPane> */}
        <br />
        <GPane label="Add Comment">
          <form
            id="request-new-form"
            className="groundup-form"
            onSubmit={formik.handleSubmit}
          >
            <GTextarea<BookingReviewFormType>
              formik={formik}
              id="add_comment"
              label="Write Comment below"
              fullWidth={true}
              // rows={3}
            />
            <GButton
              title="Comment"
              size="small"
              style={{ display: "block", margin: "10px 0" }}
            />
          </form>
        </GPane>
      </Box>
    </>
  );
}
