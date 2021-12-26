import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActionCreators } from '../../../../../store/action-creators'
import GDialog from '../../../../common/dialog/GDialog'
import { GFormInput } from '../../../../common/input/GInput'

interface EditUserProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: () => void;
    editUserData: any;
}

interface UserFormFields {
    username: string;
    email: string;
}

const EditUser = ({ open, showDialog, handleSubmit, editUserData = { username: '', email: '' } }: EditUserProps) => {

    const dispatch = useDispatch();
    const { updateUser } = bindActionCreators(userActionCreators, dispatch)

    const initialState = {
        username: editUserData.username,
        email: editUserData.email,
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: (data) => {
            handleSubmit()
            updateUser(editUserData._id, formik.values.email, formik.values.username)
        },
        validateOnChange: false,
    })
    return (
        <GDialog title="Edit User" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<UserFormFields> formik={formik} id="username" label="User Name" />
                <GFormInput<UserFormFields> formik={formik} id="email" label="Email" />
            </form >
        </GDialog >
    )
}

export default EditUser
