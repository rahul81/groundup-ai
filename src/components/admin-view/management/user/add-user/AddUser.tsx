import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormSelect, GSelectOption } from '../../../../common/select/GSelect';
import { GFormInput } from '../../../../common/input/GInput';
import AddUserFormValidation from './AddUserFormValidation'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { companyActionCreators, roleActionCreators, userActionCreators } from '../../../../../store/action-creators';
import { CreateUserState } from '../../../../../store/reducers/userReducer';
import { RootState } from '../../../../../store/reducers';
import { Alert, LinearProgress } from '@mui/material';
import { companyState } from '../../../../../store/reducers/companyReducer';
import { useEffect, useState } from 'react';
import { roleState } from '../../../../../store/reducers/roleReducer';
import GToast from '../../../../common/toast/GToast';

interface UserFormFields {
    username: string;
    company: string | number;
    email: string;
    role: string | number;
}

interface AddUserProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}


export default function AddUser({ open, showDialog, handleSubmit }: AddUserProps) {

    const [notificationOpen, setNotificationOpen] = useState(false);
    const notificationToggleState = () => {
        setNotificationOpen(!notificationOpen);
    };

    const initialValues: UserFormFields = { username: '', company: '', email: '', role: '' };
    const dispatch = useDispatch();
    const { createNewUser } = bindActionCreators(userActionCreators, dispatch)
    const { error, loading }: CreateUserState = useSelector((state: RootState) => state.createUser);

    const { fetchCompany } = bindActionCreators(companyActionCreators, dispatch)
    const { company }: companyState = useSelector((state: RootState) => state.company);

    const { fetchRoles } = bindActionCreators(roleActionCreators, dispatch)
    const { roles }: roleState = useSelector((state: RootState) => state.role);

    const [companyOptions, setCompanyOptions] = useState<GSelectOption[]>([]);
    const [rolesOptions, setRolesOptions] = useState<GSelectOption[]>([]);

    useEffect(() => {
        fetchCompany()
        fetchRoles()
    }, [])

    useEffect(() => {
        const tempCompanies:GSelectOption[] =[];
        (company || []).map((companyDetails) => {
            tempCompanies.push({ key: `${companyDetails['_id']}`, value: `${companyDetails['name']}` })
        })
        setCompanyOptions(tempCompanies);
    }, [company])

    useEffect(() => {
        const tempRoles:GSelectOption[] =[];
        (roles || []).map((roleDetails) => {
            tempRoles.push({ key: `${roleDetails['_id']}`, value: `${roleDetails['name']}` })
        })
        setRolesOptions(tempRoles);
    }, [roles])

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: AddUserFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
            createNewUser(formik.values.email, 'password', formik.values.username, formik.values.role, formik.values.company)
            setNotificationOpen(true)
        },
    });

    return (
        <>
            {loading === false && error !== "" && <GToast severity="error" message={error} notificationToggleState={notificationToggleState} open={notificationOpen} />}
            {loading === false && error === "" && <GToast severity="success" message="User added successfully" notificationToggleState={notificationToggleState} open={notificationOpen} />}
            
            <GDialog title="User Management" open={open} showDialog={showDialog}>
                <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                    <GFormInput<UserFormFields> formik={formik} id="username" label="User Name" />
                    <GFormSelect<UserFormFields> formik={formik} id="company" label="Company" options={companyOptions} />
                    <GFormInput<UserFormFields> formik={formik} id="email" label="Email" />
                    <GFormSelect<UserFormFields> formik={formik} id="role" label="Role" options={rolesOptions} />
                </form >
            </GDialog >
        </>
    )
}