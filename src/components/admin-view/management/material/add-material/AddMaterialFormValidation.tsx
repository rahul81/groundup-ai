import * as Yup from "yup";

export const AddMaterialFormValidation = Yup.object().shape({
    material: Yup
        .string()
        .required('Material is required'),
});

export default AddMaterialFormValidation