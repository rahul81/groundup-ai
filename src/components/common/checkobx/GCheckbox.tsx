import { Checkbox, Typography } from '@mui/material'
import { FormikProps, FormikValues } from 'formik'
import './g-checkbox.scss'

interface GFormikCheckboxProps<T extends FormikValues> {
    id: string;
    label: string;
    formik: FormikProps<T>;
    checkedUncheckedState: string;
}

export function GCheckbox<T extends FormikValues>({ id, label, formik, checkedUncheckedState }: GFormikCheckboxProps<T>) {
    return (
        <div className="g-checkbox">
            <Checkbox
                className="item-checkbox"
                aria-label={label}
                name={id}
                id={id}
                checked={formik.values[checkedUncheckedState]}
                onChange={formik.handleChange}
            />
            <Typography variant="body1" >{label}</Typography>
        </div>
    )
}

export default GCheckbox
