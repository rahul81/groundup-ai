import * as Yup from "yup";

export const EditCraneFormValidation = Yup.object().shape({
    startTime: Yup
        .string()
        .required('Start Time required'),
    endTime: Yup
        .string()
        .required('End Time required')
});

export default EditCraneFormValidation