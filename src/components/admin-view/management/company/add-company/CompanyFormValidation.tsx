import * as Yup from "yup";

export const CompanyFormValidation = Yup.object().shape({
    company: Yup
        .string()
        .required('Company is required'),
});

export default CompanyFormValidation