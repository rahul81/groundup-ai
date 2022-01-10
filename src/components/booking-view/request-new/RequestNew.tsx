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
import { activityActionCreator, craneActionCreator } from "../../../store/action-creators";
import { bookingsActionCreators } from '../../../store/action-creators'
import { GetCraneState } from "../../../store/reducers/craneReducer";
import { GetActivityState } from "../../../store/reducers/activityReducer";

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
}

interface GetAllCranesDataTypes {
    _id : string,
    name : string
}

interface CraneOptionsTypes {
    _id: string,
    key: string,
    value: string
}

interface GetAllLiftsDataTypes {
    _id : string,
    name : string
}

interface LiftOptionsTypes {
    _id: string,
    key: string,
    value: string
}

const J = {
	"crane_id": "61b346a9a124c52435027771",
	"user_id": "61ab61bb2e5e946ce9faccaf",
	"start_time": "2021-12-31T04:42:18.017Z",
	"end_time": "2021-12-31T05:17:18.017Z",
	"model_no": 1900,
	// "zone": "Zone-6",
	"status": "Completed",
	"status_note": "Lazy",
    "lifttype_id": "61cd390b92e11106d4ed402e"
}

export default function RequestNew({
    open,
    showDialog,
    handleSubmit,
}: RequestNewProps) {

    const dispatch = useDispatch();
    
    //Get All Cranes
    const { fetchCrane } = bindActionCreators(craneActionCreator, dispatch);
    const { cranes }: GetCraneState = useSelector(
        (state: RootState) => state.crane
    );

    const [craneOptions, setCraneOptions] = useState<CraneOptionsTypes[]>([])
    const tempCraneOptions: CraneOptionsTypes[] = []

    //Get All Lifts
    const { fetchLiftTypes } = bindActionCreators(activityActionCreator, dispatch);
    const { liftTypes }: GetActivityState = useSelector(
        (state: RootState) => state.activity
    );
    
    const [liftOptions, setLiftOptions] = useState<LiftOptionsTypes[]>([])
    const tempLiftOptions: LiftOptionsTypes[] = []
    
    //Request Booking
    const { requestNew } = bindActionCreators(bookingsActionCreators, dispatch);


    React.useEffect(() => {
        fetchCrane();
        fetchLiftTypes();        
    }, []);

    React.useEffect(() => {
        (cranes || []).map((getCrane: GetAllCranesDataTypes) => {
            
            if (getCrane) {
                let temp = { "_id": getCrane['_id'], "value": getCrane['name'], "key": getCrane['name'] }
                tempCraneOptions.push(temp)               
            }
        })
        setCraneOptions(prev => tempCraneOptions)    
    }, [cranes])

    React.useEffect(() => {
        (liftTypes || []).map((getLift: GetAllLiftsDataTypes) => {
            if (getLift) {
                let temp = { "_id": getLift['_id'], "value": getLift['name'], "key": getLift['name'] }
                tempLiftOptions.push(temp)               
            }
        })
        setLiftOptions(prev => tempLiftOptions) 
    }, [liftTypes])


    const initialValues: RequestNewFormFields = { date: new Date(), contractor: '', crane:'', activity_type: '', start_time: new Date(), end_time: new Date()};
    const crane: GSelectOption[] = craneOptions

    const activity: GSelectOption[] = liftOptions

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: requestNewValidationSchema,
        validateOnChange: false,        
        onSubmit: () => {

            const { start_time, end_time, crane, activity_type} = formik.values;


            let craneId = ''
            let liftTypeId = ''

            craneOptions.forEach(option => option.value === crane ? craneId = option._id : '')
            liftOptions.forEach(option => option.value === activity_type ? liftTypeId = option._id : '')

            const reqBody = {
                crane_id:craneId,
                user_id:localStorage.getItem("userId")?.toString() || '',
                start_time:start_time.toISOString(),
                end_time:end_time.toISOString(),
                lifttype_id: liftTypeId,
                status: 'Pending',
            }
            // console.log("req >> ", reqBody);
            requestNew(reqBody)            
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
