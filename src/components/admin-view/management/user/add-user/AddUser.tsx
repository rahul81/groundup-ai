import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormSelect, GSelectOption } from '../../../../common/select/GSelect';
import { GFormInput } from '../../../../common/input/GInput';
import AddUserFormValidation from './AddUserFormValidation'

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

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: AddUserFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
            console.log(data)
        },
    });

    return (
        <GDialog title="User Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<UserFormFields> formik={formik} id="username" label="User Name" />
                <GFormSelect<UserFormFields> formik={formik} id="company" label="Company" options={company} />
                <GFormInput<UserFormFields> formik={formik} id="email" label="Email" />
                <GFormSelect<UserFormFields> formik={formik} id="role" label="Role" options={roles} />
            </form >
        </GDialog >
    )
}
