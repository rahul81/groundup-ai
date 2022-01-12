import * as Yup from "yup";

export const bookingReviewValidationSchema = Yup.object().shape({
  location: Yup
    .string()
    .required('Location name is required'),
  crane: Yup.string().required('Crane is required'),
  activity_type: Yup.string().required('Activity type is required'),
  description: Yup.string().required('Description is required'),
  start_time: Yup.date().required('Start time is required'),
  end_time: Yup.date().required('End time is required')
});