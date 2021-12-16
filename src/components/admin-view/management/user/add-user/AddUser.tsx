import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormSelect, GSelectOption } from '../../../../common/select/GSelect';
import { GFormInput } from '../../../../common/input/GInput';
import AddUserFormValidation from './AddUserFormValidation'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { userActionCreators } from '../../../../../store/action-creators';
import { CreateUserState } from '../../../../../store/reducers/userReducer';
import { RootState } from '../../../../../store/reducers';
import { Alert, LinearProgress } from '@mui/material';

interface UserFormFields {
    username: string;
    company: string;
    email: string;
    role: string;
}

interface AddUserProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

const company: GSelectOption[] = [
    { key: 'company1', value: "GroundupAI" }
]

const roles: GSelectOption[] = [
    { key: 'role1', value: 'Project Manager' },
    { key: 'role2', value: 'Deputy PM/ Construction Manager' },
    { key: 'role3', value: 'Site Engineer /Senior Site Supervisor' },
    { key: 'role4', value: 'General Worker' },
    { key: 'role5', value: 'Sub Contractor' },
]

export default function AddUser({ open, showDialog, handleSubmit }: AddUserProps) {
    const initialValues: UserFormFields = { username: '', company: '', email: '', role: '' };
    const dispatch = useDispatch();
    const { error, loading }: CreateUserState = useSelector((state: RootState) => state.createUser);

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: AddUserFormValidation,
        onSubmit: (data) => {
            const { createNewUser } = bindActionCreators(userActionCreators, dispatch)
            createNewUser(formik.values.email, 'password', formik.values.username)
        },
    });

    return (
        <>
            <GDialog title="User Management" open={open} showDialog={showDialog}>
                <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                    <GFormInput<UserFormFields> formik={formik} id="username" label="User Name" />
                    <GFormSelect<UserFormFields> formik={formik} id="company" label="Company" options={company} />
                    <GFormInput<UserFormFields> formik={formik} id="email" label="Email" />
                    <GFormSelect<UserFormFields> formik={formik} id="role" label="Role" options={roles} />
                </form >
            </GDialog >
        </>
    )
}
