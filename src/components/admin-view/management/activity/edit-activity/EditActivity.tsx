import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { activityActionCreator } from '../../../../../store/action-creators'
import GDialog from '../../../../common/dialog/GDialog'
import { GFormInput } from '../../../../common/input/GInput'
import { ActivityFormFields } from '../add-activity/AddActivity'
import EditActivityValidation from './EditActivityValidation'

interface EditActivityProps {
    open: boolean;
    showDialog: (status: boolean) => void,
    handleSubmit: () => void,
    activityData: any;
}

const EditActivity = ({ open, showDialog, handleSubmit, activityData }: EditActivityProps) => {
    const initialState = {
        activity: activityData.activityName,
    }

    const dispatch = useDispatch();
    const { updateLiftType, fetchLiftTypes } = bindActionCreators(activityActionCreator, dispatch)

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: EditActivityValidation,
        onSubmit: async (data) => {
            handleSubmit();
            await updateLiftType(activityData._id, data?.activity);
            fetchLiftTypes();
        },
        validateOnChange: false,
    })

    return (
        <GDialog title="Edit User" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<ActivityFormFields> formik={formik} id="activity" label="Activity Name" />
            </form >
        </GDialog >
    )
}

export default EditActivity
