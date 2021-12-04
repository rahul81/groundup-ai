import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import ActivityValidation from './ActivityValidation'

interface ActivityFormFields {
    activity: string;
}

interface AddActivityProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}
export default function AddActivity({ open, showDialog, handleSubmit }: AddActivityProps) {
    const initialValues: ActivityFormFields = { activity: '' };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: ActivityValidation,
        validateOnChange: false,
        onSubmit: (data) => {
            handleSubmit(data)
            console.log(data)
        },
    });
    return (
        <GDialog title="Activity Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<ActivityFormFields> formik={formik} id="activity" label="Activity Name" />
            </form >
        </GDialog >
    )
}
