import { MenuItem, InputLabel, TextField, Typography } from '@mui/material'
import { FormikProps, FormikValues } from 'formik';
import './g-select.scss'

export interface GSelectOption{
    key:string;
    value:string;
}

interface GFormSelectProps<T extends FormikValues>{
    formik: FormikProps<T>;
    id:string;
    label?:string;
    options: GSelectOption[];
}

interface GSelectProps{
    id:string;
    label?:string;
    placeholder?:string;
    value?:string;
    options: GSelectOption[];
    onChange:(value:string)=>void;
}

export function GFormSelect<T extends FormikValues>({formik, id, label, options}:GFormSelectProps<T>) {
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
            {formik.touched[id] && formik.errors[id] && 
                <Typography variant="error" component="div">
                    {formik.errors[id]}
                </Typography>
            }
      </div>
    )
}

export default function GSelect({id, placeholder, label, value, options, onChange}:GSelectProps){
    return (
        <div className="custom-select">
            {label && <InputLabel id="custom-input-label">{label}</InputLabel>}
            {!value && <>
                <button className="btn btn-secondary dropdown-toggle dropdown-button" type="button" id={`Select ${label?label:''}`} data-bs-toggle="dropdown" aria-expanded="false">
                    {placeholder}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {(options || []).map(item=><li><a className="dropdown-item" href="#" onClick={(e)=>onChange(item.key)}>{item.value}</a></li>)}
                </ul>
            </>}
            {value && <TextField
                select
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                id={`Select ${label?label:''}`}
                name={`Select ${label?label:''}`}
                inputProps={{ 'aria-label': "Select"}}
                SelectProps={{ 
                    MenuProps:{
                        classes: {list: "dropdown-menu show"}
                    }
                }}
                
                >
                <MenuItem key="" value="">
                    <em>{placeholder}</em>
                </MenuItem>
                {(options || []).map(item=><MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>)}
            </TextField>}
      </div>
    )
}
