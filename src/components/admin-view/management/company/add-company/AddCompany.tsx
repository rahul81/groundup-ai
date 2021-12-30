import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { companyActionCreators } from '../../../../../store/action-creators';
import { createCompany } from '../../../../../store/action-creators/companyActionCreators';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import CompanyFormValidation from './CompanyFormValidation'
import { RootState } from '../../../../../store/reducers';

interface CompanyFormFields {
    company: string;
    address: string;
    phone: number;
}

interface AddCompanyProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

export default function AddCompany({ open, showDialog, handleSubmit }: AddCompanyProps) {
    const initialValues: CompanyFormFields = { company: '', address: '', phone: 0 };

    const dispatch = useDispatch();
    const { createCompany, fetchCompany } = bindActionCreators(companyActionCreators, dispatch)
    const { error, loading } = useSelector((state: RootState) => state.createCompany)

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: CompanyFormValidation,
        onSubmit: async(data) => {
            await createCompany(formik.values.company, formik.values.address, formik.values.phone);
            handleSubmit(data);
            fetchCompany()
        },
    });

    return (
        <GDialog title="Add Company" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<CompanyFormFields> formik={formik} id="company" label="Company" />
                <GFormInput<CompanyFormFields> formik={formik} id="address" label="Address" />
                <GFormInput<CompanyFormFields> formik={formik} id="phone" label="Phone" />
            </form >
        </GDialog >
    )
}
