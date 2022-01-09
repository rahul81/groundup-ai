import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { craneActionCreator } from '../../../../../store/action-creators';
import { RootState } from '../../../../../store/reducers';
import { CreateCraneState } from '../../../../../store/reducers/craneReducer';
import GFormDatePicker from '../../../../common/date-picker/GDatePicker';
import GDialog from '../../../../common/dialog/GDialog'
import Notification from '../../../../common/notification/Notification';
import { GFormSelectCheckbox } from '../../../../common/select/GSelect'

export interface CraneFormFields {
    startTime: string;
    endTime: string;
}

export interface weekDays {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

export interface bookingDaysTypes {
    text: string, selected: string
}

export const bookingDays:bookingDaysTypes[] = [
    { text: "Monday", selected: 'monday' },
    { text: "Tuesday", selected: 'tuesday' },
    { text: "Wednesay", selected: 'wednesday' },
    { text: "Thursday", selected: 'thursday' },
    { text: "Friday", selected: 'friday' },
    { text: "Saturday", selected: 'saturday' },
    { text: "Sunday", selected: 'sunday' }
];

export interface AddCraneProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

const AddCrane = ({ open, showDialog, handleSubmit }: AddCraneProps) => {
    const { setNotification } = Notification()

    const dispatch = useDispatch();
    const { createNewCrane, fetchCrane } = bindActionCreators(craneActionCreator, dispatch)

    const { createCraneLoading, createCraneError }: CreateCraneState = useSelector((state: RootState) => state.createCrane);

    const craneNotification = (message: string) => {
        setNotification(message)
    }

    const initialValues: any = {
        startTime: "",
        endTime: "",
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
    };

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: async (data) => {
            handleSubmit(data)
            let startDate = new Date(formik.values.startTime);
            let endDate = new Date(formik.values.endTime);

            var startTime = startDate.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            });
            var endTime = endDate.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            });

            let bookingDaysArray: weekDays[] = []

            bookingDays.forEach((element: any) => {
                if (formik.values[element.selected] === true) {
                    bookingDaysArray.push((element.selected).charAt(0).toUpperCase() + element.selected.slice(1))
                }
            })
            await createNewCrane(startTime, endTime, bookingDaysArray);

            if (createCraneLoading === false && createCraneError === '') {
                craneNotification('Crane created successfully')
            } else {
                craneNotification("Something went wrong")
            }
            fetchCrane()
        },
    });

    return (
        <GDialog title="Add Crane" open={open} showDialog={showDialog} >
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <Grid xs={12} container>
                    <Grid xs={12} container>
                        <Grid xs={4}>
                            <GFormSelectCheckbox formik={formik} label='Booking Days' id="bookingdays" options={bookingDays} />
                        </Grid>
                    </Grid>

                    <Grid xs={4}>
                        <GFormDatePicker<CraneFormFields> formik={formik} id="startTime" label="Time Start" timeonly={true} />
                    </Grid>

                    <Grid xs={4}>
                        <GFormDatePicker<CraneFormFields> formik={formik} id="endTime" label="End Start" timeonly={true} />
                    </Grid>

                </Grid>
            </form >
        </GDialog >
    )
}

export default AddCrane
