import { Grid } from '@mui/material'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { craneActionCreator } from '../../../../../store/action-creators'
import { RootState } from '../../../../../store/reducers'
import { EditCraneState } from '../../../../../store/reducers/craneReducer'
import GFormDatePicker from '../../../../common/date-picker/GDatePicker'
import GDialog from '../../../../common/dialog/GDialog'
import { GFormSelectCheckbox } from '../../../../common/select/GSelect'
import { weekDays } from '../add-crane/AddCrane'
import { EditCraneFormValidation } from './EditCraneFormValidation'

export interface bookingDaysTypes {
    text: string, selected: string
}

export const bookingDays: bookingDaysTypes[] = [
    { text: "Monday", selected: 'monday' },
    { text: "Tuesday", selected: 'tuesday' },
    { text: "Wednesay", selected: 'wednesday' },
    { text: "Thursday", selected: 'thursday' },
    { text: "Friday", selected: 'friday' },
    { text: "Saturday", selected: 'saturday' },
    { text: "Sunday", selected: 'sunday' }
];

interface EditCraneProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: () => void;
    editCraneData: any;
}

export interface GSelectOption {
    key: string;
    value: string;
}

interface EditCraneFormFields {
    startTime: number;
    endTime: number;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

const EditCrane = ({ open, showDialog, handleSubmit, editCraneData }: EditCraneProps) => {

    const dispatch = useDispatch();

    const { updateCrane, fetchCrane } = bindActionCreators(craneActionCreator, dispatch)
    const { editCraneError, editCraneLoading }: EditCraneState = useSelector((state: RootState) => state.editCrane);

    let splittedTime = editCraneData.bookingHours?.split(' ');
    //["07:10 AM - 07:15 AM"] ==> ['07:10', 'AM', '-', '07:15', 'AM']
    let startTimeHourMinute = splittedTime[0]?.split(':') //['06', '40']
    let endTimeHourMinute = splittedTime[3]?.split(':')   //['06', '35']

    let startTime = new Date().setHours(startTimeHourMinute[0], startTimeHourMinute[1]);
    let endTime = new Date().setHours(endTimeHourMinute[0], endTimeHourMinute[1]);

    console.log(startTime)

    const initialState = {
        startTime: startTime,
        endTime: endTime,
        monday: editCraneData.bookingDays.includes('Monday'),
        tuesday: editCraneData.bookingDays.includes('Tuesday'),
        wednesday: editCraneData.bookingDays.includes('Wdnesday'),
        thursday: editCraneData.bookingDays.includes('Thursday'),
        friday: editCraneData.bookingDays.includes('Friday'),
        saturday: editCraneData.bookingDays.includes('Saturday'),
        sunday: editCraneData.bookingDays.includes('Sunday'),
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async (data) => {
            handleSubmit()
            console.log(editCraneData['_id'])

            let startDate = new Date(formik.values.startTime);
            let endDate = new Date(formik.values.endTime);

            let startTime = startDate.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            });
            let endTime = endDate.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            });

            let bookingDaysArray: weekDays[] = []

            bookingDays.forEach((element: any) => {
                // if (formik.values[currentDayString] === true) {
                // }
            })


            console.log(editCraneData.bookingDays.split(','))
            // await updateCrane(editCraneData['_id'], startTime, endTime, editCraneData.bookingDays.split(','))
            await updateCrane(editCraneData['_id'], startTime, endTime)
            await fetchCrane()

        },
        validateOnChange: false,
        validationSchema: EditCraneFormValidation
    })


    return (
        <GDialog title="Edit Crane" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <Grid xs={12} container>
                    <Grid xs={12} container>
                        <Grid xs={4}>
                            <GFormSelectCheckbox formik={formik} label='Booking Days' id="bookingdays" options={bookingDays} />
                        </Grid>
                    </Grid>

                    <Grid xs={12} container>
                        <Grid xs={4}>
                            <GFormDatePicker<EditCraneFormFields> formik={formik} id="startTime" label="Time Start" timeonly={true} />
                        </Grid>

                        <Grid xs={4}>
                            <GFormDatePicker<EditCraneFormFields> formik={formik} id="endTime" label="End Start" timeonly={true} />
                        </Grid>
                    </Grid>
                </Grid>
            </form >
        </GDialog >
    )
}

export default EditCrane
