import * as Yup from "yup";

export const AddActivityFormValidation = Yup.object().shape({
    activity: Yup
        .string()
        .required('Activity is required'),
});

export default AddActivityFormValidation