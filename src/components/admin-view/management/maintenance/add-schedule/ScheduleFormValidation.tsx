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
        .date().nullable().typeError('Invalid Date')
        .required('Recurrance Date required'),
    startTime: Yup
        .date()
        .required('Start Time  required'),
    endTime: Yup
        .date().min(Yup.ref('startTime'),
        "End time can't be before start time")
        .required('End Time required'),
    description: Yup
        .string()
        .required(),
});

export default CompanyFormValidation