import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import CompanyFormValidation from './CompanyFormValidation'

interface CompanyFormFields {
    company: string;
}

interface AddCompanyProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

export default function AddCompany({ open, showDialog, handleSubmit }: AddCompanyProps) {
    const initialValues: CompanyFormFields = {  company: '' };

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: CompanyFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
        },
    });

    return (
        <GDialog title="Company Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<CompanyFormFields> formik={formik} id="company" label="Company" />
            </form >
        </GDialog >
    )
}
