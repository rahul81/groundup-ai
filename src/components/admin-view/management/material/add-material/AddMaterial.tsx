import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import MaterialValidation from './AddMaterialFormValidation'

interface MaterialFormFields {
    material: string;
}

interface AddMaterialProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}
export default function AddMaterial({ open, showDialog, handleSubmit }: AddMaterialProps) {
    const initialValues: MaterialFormFields = { material: '' };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: MaterialValidation,
        validateOnChange: false,
        onSubmit: (data) => {
            handleSubmit(data)
            console.log(data)
        },
    });
    return (
        <GDialog title="Material Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<MaterialFormFields> formik={formik} id="material" label="Material Name" />
            </form >
        </GDialog >
    )
}
