import {
  DialogProps,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Input,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  NativeSelect,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { requestNewValidationSchema } from "./RequestNewFormValidation";
import CloseIcon from "@mui/icons-material/Close";
import "./request-new.scss";
import GDialog from "../../common/dialog/GDialog";
import { GFormInput } from "../../common/input/GInput";
import { GFormSelect, GSelectOption } from "../../common/select/GSelect";
import GFormDatePicker from "../../common/date-picker/GDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../../store/reducers";
import { getCranesActionCreators } from "../../../store/action-creators";
import { getCranesState } from "../../../store/reducers/getCranesReducer";

interface RequestNewFormFields {
  contractor: string;
  crane: string | number;
}

interface RequestNewProps {
  open: boolean;
  showDialog: (status: boolean) => void;
  handleSubmit: (data: any) => void;
}

interface GetAllCranesDataTypes {
  _id: string;
  name: string;
  model_no: number;
  available: boolean;
  idle: boolean;
  available_start_time: string;
  available_end_time: string;
  weekdays: [];
  createdAt: string;
  updatedAt: string;
}

export default function RequestNew({
  open,
  showDialog,
  handleSubmit,
}: RequestNewProps) {
  const dispatch = useDispatch();
  const { getCranes } = bindActionCreators(getCranesActionCreators, dispatch);
  const { data, loading, error }: getCranesState = useSelector(
    (state: RootState) => state.bookings
  );

  const [cranesData, setCranesData] = useState<GetAllCranesDataTypes[]>([]);

  React.useEffect(() => {
    getCranes();
    setCranesData(data);
  }, []);

  
  console.log("CraneDa", cranesData);

  const initialValues: RequestNewFormFields = { contractor: "", crane: "" };
  const crane: GSelectOption[] = [
    { key: "zone1", value: "Zone1" },
    { key: "zone2", value: "Zone2" },
    { key: "zone3", value: "Zone3" },
  ];

  const activity: GSelectOption[] = [
    { key: "activity1", value: "activity1" },
    { key: "activity2", value: "activity2" },
    { key: "activity3", value: "activity3" },
  ];

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: requestNewValidationSchema,
    validateOnChange: false,
    onSubmit: (data) => {
      handleSubmit(data);
      console.log("submitData", data);
    },
  });

  return (
    <GDialog title="Request Booking" open={open} showDialog={showDialog}>
      <form
        id="request-new-form"
        className="groundup-form"
        onSubmit={formik.handleSubmit}
      >
        <GFormDatePicker<RequestNewFormFields>
          formik={formik}
          id="date"
          label="Date"
        />
        <GFormInput<RequestNewFormFields>
          formik={formik}
          id="contractor"
          label="Contractor"
        />
        <GFormSelect<RequestNewFormFields>
          formik={formik}
          id="crane"
          label="Crane"
          options={crane}
        />
        <GFormSelect<RequestNewFormFields>
          formik={formik}
          id="activity_type"
          label="Activity Type"
          options={activity}
        />
        <Grid xs={12} container>
          <Grid xs={4}>
            <GFormDatePicker<RequestNewFormFields>
              formik={formik}
              id="startTime"
              label="Time Start"
              timeonly={true}
            />
          </Grid>
          <Grid xs={4}>
            <GFormDatePicker<RequestNewFormFields>
              formik={formik}
              id="endTime"
              label="End Start"
              timeonly={true}
            />
          </Grid>
        </Grid>
      </form>
    </GDialog>
  );
}
