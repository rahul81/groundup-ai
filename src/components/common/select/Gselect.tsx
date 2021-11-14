import { FormControl, Select, MenuItem, FormHelperText, SelectChangeEvent, InputLabel, TextField, Typography } from '@mui/material'
import { FormikProps, FormikValues, useField } from 'formik';
import React from 'react'
import './g-select.scss'

export interface GSelectOption{
    key:string | number;
    value:string | number;
}

interface GInputProps<T extends FormikValues>{
    formik: FormikProps<T>;
    id:string;
    label:string;
    options: GSelectOption[];
}

export default function Gselect<T extends FormikValues>({formik, id, label, options}:GInputProps<T>) {
    const {setFieldValue} = formik;
    return (
        <div className="custom-select">
            <InputLabel id="custom-input-label">{label}</InputLabel>
            <TextField
                select
                value={formik.values[id]}
                onChange={(e)=>{
                    setFieldValue(id, e.target.value, true);
                }}
                error={formik.touched[id] && Boolean(formik.errors[id])}
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem key="" value="">
                    <em>None</em>
                </MenuItem>
                {(options || []).map(item=><MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>)}
            </TextField>
            {formik.errors[id] && 
                <Typography variant="error" component="div">
                    {formik.errors[id]}
                </Typography>
            }
      </div>
    )
}
