import * as Yup from "yup";

export const requestNewValidationSchema = Yup.object().shape({
  contractor: Yup
    .number()
    .typeError('Provide valid value')
    .required('Contractor name is required'),
});