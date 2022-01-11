import * as Yup from "yup";

export const requestNewValidationSchema = Yup.object().shape({
  contractor: Yup
    .string()
    .required('Contractor name is required'),
  date: Yup.date().required('date is required'),
  crane: Yup.string().required('Crane is required'),
  activity_type: Yup.string().required('Activity type is required'),
  start_time: Yup.date().required('Start time is required'),
  end_time: Yup.date().required('End time is required')
});