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
import {
  activityActionCreator,
  craneActionCreator,
} from "../../../store/action-creators";
import { bookingsActionCreators } from "../../../store/action-creators";
import { GetCraneState } from "../../../store/reducers/craneReducer";
import { GetActivityState } from "../../../store/reducers/activityReducer";
import { number } from "yup/lib/locale";
import { HOME_BOOKING } from "../../../constants/ContextPaths";
import { useHistory } from "react-router-dom";

interface RequestNewFormFields {
  contractor: string;
  crane: string;
  date: Date;
  activity_type: string;
  start_time: Date;
  end_time: Date;
}

interface RequestNewProps {
  open: boolean;
  showDialog: (status: boolean) => void;
  handleSubmit: (data: any) => void;
  formValues?: RequestNewFormFields;
  bookingId?: string;
  bookingStatus?: string;
}

interface GetAllCranesDataTypes {
  _id: string;
  available: boolean;
  name: string;
}

interface CraneOptionsTypes {
  _id: string;
  key: string;
  value: string;
}

interface GetAllLiftsDataTypes {
  _id: string;
  name: string;
}

interface LiftOptionsTypes {
  _id: string;
  key: string;
  value: string;
}

export default function RequestNew({
  open,
  showDialog,
  handleSubmit,
  formValues,
  bookingId = '',
  bookingStatus = ''
}: RequestNewProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  //Get All Cranes
  const { fetchCrane } = bindActionCreators(craneActionCreator, dispatch);
  const { cranes }: GetCraneState = useSelector(
    (state: RootState) => state.crane
  );

  const [craneOptions, setCraneOptions] = useState<CraneOptionsTypes[]>([]);
  const tempCraneOptions: CraneOptionsTypes[] = [];

  //Get All Lifts
  const { fetchLiftTypes } = bindActionCreators(
    activityActionCreator,
    dispatch
  );
  const { liftTypes }: GetActivityState = useSelector(
    (state: RootState) => state.activity
  );

  const [liftOptions, setLiftOptions] = useState<LiftOptionsTypes[]>([]);
  const tempLiftOptions: LiftOptionsTypes[] = [];

  //Request Booking
  const { requestNew, getBookings } = bindActionCreators(bookingsActionCreators, dispatch);


  React.useEffect(() => {
    fetchCrane();
    fetchLiftTypes();
  }, []);

  React.useEffect(() => {
    (cranes || []).map((getCrane: GetAllCranesDataTypes) => {
      if (getCrane) {
        if (getCrane['available']){
          let temp = {
            _id: getCrane["_id"],
            value: getCrane["name"],
            key: getCrane["name"],
          };
          tempCraneOptions.push(temp);
        }
      }
    });
    setCraneOptions((prev) => tempCraneOptions);
  }, [cranes]);

  React.useEffect(() => {
    (liftTypes || []).map((getLift: GetAllLiftsDataTypes) => {
      if (getLift) {
        let temp = {
          _id: getLift["_id"],
          value: getLift["name"],
          key: getLift["name"],
        };
        tempLiftOptions.push(temp);
      }
    });
    setLiftOptions((prev) => tempLiftOptions);
  }, [liftTypes]);

  const initialValues: RequestNewFormFields = (function getValues(){

    if (!formValues){
      return {
        date: new Date(),
        contractor: "",
        crane: "",
        activity_type: "",
        start_time: new Date(),
        end_time: new Date(),
      };
    } else {
      console.log("FORM VALUES >> ", formValues);
      return {
        date: formValues.date,
        contractor: formValues.contractor,
        crane: formValues.crane,
        activity_type: formValues.activity_type,
        start_time: formValues.start_time,
        end_time: formValues.end_time,
      };
    }

  })();

  const crane: GSelectOption[] = craneOptions;

  const activity: GSelectOption[] = liftOptions;

  const dateFormat = (selectedDate : string, time: Date) => {
    let second = ""
    let minutes = ""
    let hours = ""
    if(time.getSeconds() === 0){
      second = "00"
    }
    else{
      second = time.getSeconds().toString()
    }

    if (time.getMinutes() === 0){
      minutes = "00"
    } else{
      minutes = time.getMinutes().toString()
    }

    if (time.getHours() === 0){
      hours = "00"
    } else{
      hours = time.getHours().toString()
    }

    return selectedDate + "T" + hours + ":" + minutes + ":" + second + "." + time.getMilliseconds() + "Z"
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: requestNewValidationSchema,
    validateOnChange: false,
    onSubmit: () => {

      const { date, start_time, end_time, crane, activity_type } = formik.values;
      let dateCopy = new Date(date)
      const tempdate = new Date(dateCopy.setHours(dateCopy.getHours() + 6))
      const selectedDate = tempdate.toISOString().substr(0,10)
  
      let craneId = "";
      let liftTypeId = "";

      craneOptions.forEach((option) =>
        option.value === crane ? (craneId = option._id) : ""
      );
      liftOptions.forEach((option) =>
        option.value === activity_type ? (liftTypeId = option._id) : ""
      );

      
      if ( tempdate.toLocaleDateString() === new Date().toLocaleDateString() && start_time < new Date()) {
        alert("Start time is less than present time")
      } else if (start_time > end_time) {
        alert("Start time is greater than end time")
      } else {

        if (bookingId){

          console.log("Booking status >> ", bookingStatus)

          const reqBody = {
            crane_id: craneId,
            user_id: localStorage.getItem("userId")?.toString() || "",
            start_time: dateFormat(selectedDate, start_time),
            end_time: dateFormat(selectedDate, end_time),
            lifttype_id: liftTypeId,
            status: bookingStatus.toLowerCase() === 'pending' ? "Pending" : "Rescheduled",
            update:true,
            bookingId:bookingId
          };

          console.log("REQ BODY >> ", reqBody);

          requestNew(reqBody).then((response:any) => {
            handleSubmit(false);
            history.push(HOME_BOOKING)
          }).catch((error:any)=>{
            //TODO error to display
          });

        } else {

          const reqBody = {
            crane_id: craneId,
            user_id: localStorage.getItem("userId")?.toString() || "",
            start_time: dateFormat(selectedDate, start_time),
            end_time: dateFormat(selectedDate, end_time),
            lifttype_id: liftTypeId,
            status: "Pending",
          };

          console.log("New req body >> ", reqBody);

          requestNew(reqBody).then((response:any) => {
            handleSubmit(false);
            getBookings();
          }).catch((error:any)=>{
            //TODO error to display
          });
        }
      }
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
              id="start_time"
              label="Time Start"
              timeonly={true}
            />
          </Grid>
          <Grid xs={4}>
            <GFormDatePicker<RequestNewFormFields>
              formik={formik}
              id="end_time"
              label="End Start"
              timeonly={true}
            />
          </Grid>
        </Grid>
      </form>
    </GDialog>
  );
}
