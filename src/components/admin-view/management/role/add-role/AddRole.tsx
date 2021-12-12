import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import RoleFormValidation from './RoleFormValidation'
import { Grid, InputLabel } from '@mui/material'
import { Box } from '@mui/system';
import GCheckbox from '../../../../common/checkobx/GCheckbox';

interface RoleFormFields {
    role: string;
    maintenance: boolean;
    machineIdling: boolean;
    approvedRejectedBooking: boolean;
    rescheduleBooking: boolean;
    canelledBooking: boolean;
    updateBooking: boolean;
    newbooking: boolean;
}

interface AddRoleProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

interface CheckBoxFields {
    id: string;
    label: string;
}

const checkBoxes: CheckBoxFields[] = [
    { id: "newbooking", label: "New Booking" },
    { id: "updateBooking", label: "Update Booking" },
    { id: "canelledBooking", label: "Cancelled Booking" },
    { id: "rescheduleBooking", label: "Reschedule Booking" },
    { id: "approvedRejectedBooking", label: "Approved/ Rejected Booking" },
    { id: "machineIdling", label: "Machine Idling" },
    { id: "maintenance", label: "Maintenance" },]


export default function AddRole({ open, showDialog, handleSubmit }: AddRoleProps) {
    const initialValues: RoleFormFields = {
        role: '',
        maintenance: true,
        machineIdling: true,
        approvedRejectedBooking: true,
        rescheduleBooking: true,
        canelledBooking: true,
        updateBooking: true,
        newbooking: true
    };

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: RoleFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
        },
    });

    return (
        <GDialog  title="Role Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<RoleFormFields> formik={formik} id="role" label="User Role" />
                <InputLabel id="notification">Notification</InputLabel>
                <Grid xs={12} container>

                    {checkBoxes.map((item, index) => {
                        return (
                            <Grid xs={6}>
                                <Box className="item">
                                    <GCheckbox
                                        selected={item.id}
                                        formik={formik}
                                        id={item.id}
                                        label={item.label} />
                                </Box>
                            </Grid>
                        )
                    })}

                </Grid>
            </form >
        </GDialog >
    )
}
