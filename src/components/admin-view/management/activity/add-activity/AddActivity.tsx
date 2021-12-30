import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activityActionCreator } from '../../../../../store/action-creators';
import { RootState } from '../../../../../store/reducers';
import { CreateActivityState } from '../../../../../store/reducers/activityReducer';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import ActivityValidation from './ActivityValidation'

export interface ActivityFormFields {
    activity: string;
}

interface AddActivityProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}
export default function AddActivity({ open, showDialog, handleSubmit }: AddActivityProps) {
    const dispatch = useDispatch();
    const { createNewLiftType, fetchLiftTypes } = bindActionCreators(activityActionCreator, dispatch)
    const { createLiftTypesError, createLiftTypesLoading }: CreateActivityState = useSelector((state: RootState) => state.createActivity);

    const initialValues: ActivityFormFields = { activity: '' };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: ActivityValidation,
        validateOnChange: false,
        onSubmit: async (data) => {
            handleSubmit(data)
            await createNewLiftType(formik.values.activity)
            fetchLiftTypes()
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
