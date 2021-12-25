import * as Yup from "yup";

export const CompanyFormValidation = Yup.object().shape({
    company: Yup
        .string()
        .required('Company is required'),

    address: Yup
        .string()
        .required('Address is required'),

    phone: Yup
        .number()
        .required('Phone is required'),
});

export default CompanyFormValidation