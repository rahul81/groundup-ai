import * as Yup from "yup";

export const AddUserFormValidation = Yup.object().shape({
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    username: Yup
        .string()
        .required('User Name is required'),
    company: Yup
        .string()
        .required("Company is required"),
    role: Yup
        .string()
        .required("Role is required")
});

export default AddUserFormValidation