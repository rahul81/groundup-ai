import * as Yup from "yup";

export const requestNewValidationSchema = Yup.object().shape({
  contractor: Yup
    .string()
    .required('Contractor name is required'),
});