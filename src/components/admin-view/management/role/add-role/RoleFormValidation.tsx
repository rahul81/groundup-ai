import * as Yup from "yup";

export const RoleFormValidation = Yup.object().shape({
    role: Yup
        .string()
        .required('Role is required'),
});

export default RoleFormValidation