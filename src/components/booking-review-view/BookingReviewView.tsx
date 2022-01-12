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
import {GTextarea} from "../common/textarea/GTextarea";

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

interface BookingReviewFormType {
  location: string;
  crane: string;
  activity_type: string;
  description: string;
  start_time: Date;
  end_time: Date;
}

export default function BookingReviewView() {
  const history = useHistory();

  const initialValues: BookingReviewFormType = {
    location: "",
    crane: "scas",
    activity_type: "",
    description: "",
    start_time: new Date(),
    end_time: new Date(),
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

            <GButton
              title="Add Activity"
              size="small"
              style={{ display: "block", margin: "10px 0" }}
            />
          </form>
        </GPane>
      </Box>
    </>
  );
}
