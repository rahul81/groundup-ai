import { Box, Grid } from "@mui/material";
import React from "react";
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

const status: GStatusSteps[] = [
  {
    color: "primary",
    key: "Pending",
    value: "Pending",
  },
  {
    key: "Scheduled",
    value: "Scheduled",
    variant: "outlined",
  },
  {
    key: "In-Progress",
    value: "In-Progress",
    variant: "outlined",
  },
  {
    key: "Completed",
    value: "Completed",
    variant: "outlined",
  },
];

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
console.log("Date", date);

interface BookingReviewFormType {
  location: string;
  crane: string;
  activity_type: string;
  description: string;
  start_time: Date;
  end_time: Date;

  add_comment: string;
}

const data = {
  "date": "2021 Dec 04",
  "timeStart": "6:17 PM",
  "timeEnd": "7:17 PM",
  "zone": "Danger zone",
  "crane": "George's Crane",
  "taskType": "Pulling",
  "status": {
      "key": null,
      "ref": null,
      "props": {
          "title": "Rejected",
          "color": "error",
          "size": "small",
          "sx": {
              "width": "100%",
              "textTransform": "capitalize"
          }
      },
      "_owner": null,
      "_store": {}
  }
}

const statusData = [
  {
      label:'Date',
      value: data.date
  },
  {
      label:'Time Start',
      value: data.timeStart
  },
  {
      label:'Time End',
      value: data.timeEnd
  },
  {
      label:'Zone',
      value: data.zone
  },
  {
      label:'Crane',
      value: data.crane
  },
  {
      label:'Task Type',
      value: data.taskType
  },
  {
      label:'Status',
      value: data.status.props.title
  }
]

export default function BookingReviewView() {
  const history = useHistory();

  const initialValues: BookingReviewFormType = {
    location: "",
    crane: "",
    activity_type: "",
    description: "",
    start_time: new Date(),
    end_time: new Date(),
    add_comment: "",
  };

  console.log("Status", StatusData);

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
      <StatusHeader />
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

        <GPane label="Schedule">
          <GTable rows={rows} columns={columns} />
        </GPane>

        {/* <GPane label="Activity"></GPane> */}

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
