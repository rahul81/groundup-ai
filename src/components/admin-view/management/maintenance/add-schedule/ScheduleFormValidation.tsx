import * as Yup from "yup";

export const CompanyFormValidation = Yup.object().shape({
    contracter: Yup
        .string()
        .required('Contracter is required'),
    schedule: Yup
        .string()
        .required('Schedule is required'),
    location: Yup
        .string()
        .required('Location is required'),
    crane: Yup
        .string()
        .required('Crane is required'),
    maintenance: Yup
        .string()
        .required('Maintenance  is required'),
    recurranceDate: Yup
        .date()
        .required('Recurrance Date required'),
    endTime: Yup
        .date()
        .required('End Time required'),
    startTime: Yup
        .date()
        .required('Start Time  required')
});

export default CompanyFormValidation