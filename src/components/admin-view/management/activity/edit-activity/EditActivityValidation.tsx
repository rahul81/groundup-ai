import * as Yup from "yup";

export const EditActivityFormValidation = Yup.object().shape({
    activity: Yup
        .string()
        .required('Activity is required'),
});

export default EditActivityFormValidation