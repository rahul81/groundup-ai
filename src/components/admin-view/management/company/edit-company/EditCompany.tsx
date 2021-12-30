import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NoSubstitutionTemplateLiteral } from 'typescript'
import { companyActionCreators } from '../../../../../store/action-creators'
import GDialog from '../../../../common/dialog/GDialog'
import { GFormInput } from '../../../../common/input/GInput'

interface EditCompanyProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: () => void;
    EditCompanyData: any;
}

interface CompanyFormFields {
    company: string;
    address: string;
    phone: NoSubstitutionTemplateLiteral;
}

const EditCompany = ({ open, showDialog, handleSubmit, EditCompanyData = { company: '', address: '', number: 0, _id: 0 } }: EditCompanyProps) => {

    const dispatch = useDispatch();
    const { editCompany, fetchCompany } = bindActionCreators(companyActionCreators, dispatch)

    const initialState = {
        company: EditCompanyData.company,
        address: EditCompanyData.address,
        phone: EditCompanyData.number
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async (data) => {
            handleSubmit()
            await editCompany(EditCompanyData?._id, formik.values.company, formik.values.address, formik.values.phone);
            fetchCompany()
        },
        validateOnChange: false,
    })

    return (
        <GDialog title="Edit Company" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<CompanyFormFields> formik={formik} id="company" label="Company" />
                <GFormInput<CompanyFormFields> formik={formik} id="address" label="Address" />
                <GFormInput<CompanyFormFields> formik={formik} id="phone" label="Phone" />
            </form >
        </GDialog >
    )
}

export default EditCompany
