import { InputLabel, Input, Typography, TextField } from '@mui/material'
import { FormikProps, FormikValues } from 'formik'
import './g-textarea.scss'

interface GFormInputProps<T extends FormikValues> {
    formik: FormikProps<T>
    id: string;
    label: string;
    fullWidth?: boolean;
    rows?: number;
}

export function GTextarea<T extends FormikValues>({ formik, id, label, fullWidth = false, rows = 2 }: GFormInputProps<T>) {
    return (
        <div className="custom-textarea">
            <InputLabel id={id} style={{marginBottom: "10px"}}>{label}</InputLabel>
            <TextField
                hiddenLabel fullWidth={fullWidth}
                multiline
                rows={rows}
                required id={id} aria-label={id}
                name={id} autoComplete="off"
                value={formik.values[id]}
                onBlur={() => formik.validateField(id)}
                onChange={formik.handleChange}
                error={formik.touched[id] && Boolean(formik.errors[id])}
            />

            {formik.errors[id] &&
                <Typography variant="error" component="div">
                    {formik.errors[id]}
                </Typography>
            }
        </div>
    )
}

