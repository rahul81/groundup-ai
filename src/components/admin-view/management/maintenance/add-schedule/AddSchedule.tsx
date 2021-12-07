import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Field, useFormik } from 'formik';
import { useState } from 'react';
import GFormDatePicker, { GDatePicker } from '../../../../common/date-picker/GDatePicker';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import { GFormSelect, GSelectOption } from '../../../../common/select/GSelect';
import { GTextarea } from '../../../../common/textarea/GTextarea';
import ScheduleFormValidation from './ScheduleFormValidation'

interface ScheduleFormFields {
    contracter: string;
    schedule: string;
    location: string;
    crane: string;
    maintenance: string;
    description: string;
    startTime: string;
    endTime: string;
    recurranceDate: Date | null;
}

interface AddScheduleProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}


export default function AddSchedule({ open, showDialog, handleSubmit }: AddScheduleProps) {
    const [date, setDate] = useState<Date | null>(null);

    const initialValues: ScheduleFormFields = {
        contracter: "",
        schedule: "",
        location: "",
        crane: "",
        maintenance: "",
        description: "",
        startTime: "",
        endTime: "",
        recurranceDate: null,
    };

    const contracter: GSelectOption[] = [
        { key: "contracte1", value: "contracter 1" },
        { key: "contracte2", value: "contracte 2" },
        { key: "contracte3", value: "contracte 3" }
    ];

    const schedule: GSelectOption[] = [
        { key: "schedule1", value: "Schedule 1" },
        { key: "schedule2", value: "Schedule 2" },
        { key: "schedule3", value: "Schedule 3" }
    ];

    const location: GSelectOption[] = [
        { key: "location3", value: "Location 1" },
        { key: "location2", value: "Location 2" },
        { key: "location1", value: "Location 3" }
    ];

    const crane: GSelectOption[] = [
        { key: "crane1", value: "Crane 1" },
        { key: "crane2", value: "Crane 2" },
        { key: "crane3", value: "Crane 3" }
    ];

    const maintenance: GSelectOption[] = [
        { key: "maintenance1", value: "Maintenance 1" },
        { key: "maintenance2", value: "Maintenance 2" },
        { key: "maintenance3", value: "Maintenance 3" }
    ];

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: ScheduleFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
            console.log(data)
        },
    });

    return (
        <GDialog title="Schedule Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormSelect<ScheduleFormFields> formik={formik} id="contracter" label="Contracter" options={contracter} />
                <GFormSelect<ScheduleFormFields> formik={formik} id="schedule" label="Schedule Name" options={schedule} />
                <GFormSelect<ScheduleFormFields> formik={formik} id="location" label="Location" options={location} />
                <GFormSelect<ScheduleFormFields> formik={formik} id="crane" label="Crane" options={crane} />
                <GFormSelect<ScheduleFormFields> formik={formik} id="maintenance" label="Maintenance Type" options={maintenance} />

                <Grid xs={12} container>
                    <Grid xs={4}>
                        <GFormDatePicker<ScheduleFormFields> formik={formik} id="startTime" label="Time Start" timeonly={true} />
                    </Grid>
                    <Grid xs={4}>
                        <GFormDatePicker<ScheduleFormFields> formik={formik} id="endTime" label="End Start" timeonly={true} />
                    </Grid>
                </Grid>

                <GTextarea formik={formik} id="description" label="Description" fullWidth={true} />

                <Box className="dropdown" mr={1}>
                    <GFormDatePicker formik={formik} id="recurranceDate" label="Recurrance Date" dateDelete={true} />
                </Box>

            </form >
        </GDialog >
    )
}
