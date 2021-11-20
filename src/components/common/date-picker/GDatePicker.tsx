import DatePicker from 'react-datepicker';
import { FormikValues, FormikProps } from 'formik';
import { Box, Input, InputLabel, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

import "react-datepicker/dist/react-datepicker.css";
import './g-date-picker.scss';
import { useRef } from 'react';

interface GDatePickerProps{
    label?:string;
    date: Date;
    onChange:(date:Date)=>void
}

interface GFormDatePickerProps<T extends FormikValues>{
    formik: FormikProps<T>;
    id:string;
    label?:string;
    date: string;
}

export default function GFormDatePicker<T extends FormikValues>({formik, id, label, date}:GFormDatePickerProps<T>){
    const {setFieldValue} = formik;
    return (
        <>
            <InputLabel id={id}>{label}</InputLabel>
            <DatePicker
                selected={formik.values[id]}
                onChange={(value)=>{
                    setFieldValue(id, value, true);
                }}
            />
            {formik.errors[id] && 
                <Typography variant="error" component="div">
                    {formik.errors[id]}
                </Typography>
            }
        </>
    )
}

export function GDatePicker({label, date, onChange}:GDatePickerProps){
    const datepickerRef = useRef<DatePicker>(null);
    const handleClickDatepickerIcon =() => {
        const datepickerElement = datepickerRef.current;
        datepickerElement?.setFocus();
      }
    return (
        <Box className="g-date-picker">
            <InputLabel >{label}</InputLabel>
            <DatePicker
                selected={date}
                onChange={onChange}
                ref={datepickerRef}
                placeholderText="Select Date"
            />
            <EventIcon className="date-icon" onClick={() => handleClickDatepickerIcon()}/>
        </Box>
    )
}