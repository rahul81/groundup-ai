import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { roleActionCreators, userActionCreators } from '../../../../../store/action-creators'
import { RootState } from '../../../../../store/reducers'
import { roleState } from '../../../../../store/reducers/roleReducer'
import GDialog from '../../../../common/dialog/GDialog'
import { GFormInput } from '../../../../common/input/GInput'
import { GFormSelect } from '../../../../common/select/GSelect'
import EditUserFormValidation from './EditUserFormValidation'

interface EditUserProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: () => void;
    editUserData: any;
}

interface UserFormFields {
    username: string;
    email: string;
    role: string;
}

export interface GSelectOption {
    key: string;
    value: string;
}
const EditUser = ({ open, showDialog, handleSubmit, editUserData = { username: '', email: '', role: '' } }: EditUserProps) => {

    const dispatch = useDispatch();
    const { updateUser, fetchUsers } = bindActionCreators(userActionCreators, dispatch)
    const [rolesOptions, setRolesOptions] = useState<GSelectOption[]>([]);
    const { fetchRoles } = bindActionCreators(roleActionCreators, dispatch)
    const { roles }: roleState = useSelector((state: RootState) => state.role);

    useEffect(() => {
        fetchRoles()
    }, [])

    useEffect(() => {
        const tempRoles: GSelectOption[] = [];
        (roles || []).map((roleDetails) => {
            tempRoles.push({ key: `${roleDetails['_id']}`, value: `${roleDetails['name']}` })
        })
        setRolesOptions(tempRoles);
    }, [roles])

    const initialState = {
        username: editUserData.username,
        email: editUserData.email,
        role: editUserData.userrole,
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: EditUserFormValidation,
        onSubmit: async(data) => {
            handleSubmit()
            await updateUser(editUserData._id, formik.values.email, formik.values.username, formik.values.role)
        },
        validateOnChange: false,
    })
    return (
        <GDialog title="Edit User" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<UserFormFields> formik={formik} id="username" label="User Name" />
                <GFormInput<UserFormFields> formik={formik} id="email" label="Email" />
                <GFormSelect<UserFormFields> formik={formik} id="role" label="Role" options={rolesOptions} />
            </form >
        </GDialog >
    )
}

export default EditUser
