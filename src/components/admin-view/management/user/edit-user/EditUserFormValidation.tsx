import * as Yup from "yup";

export const EditUserFormValidation = Yup.object().shape({
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    username: Yup
        .string()
        .required('User Name is required'),
    role: Yup
        .string()
        .required("Role is required")
});

export default EditUserFormValidation