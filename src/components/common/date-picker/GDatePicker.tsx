import DatePicker from 'react-datepicker';
import { FormikValues, FormikProps } from 'formik';
import { Box, Input, InputLabel, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import "react-datepicker/dist/react-datepicker.css";
import './g-date-picker.scss';
import { useRef } from 'react';

interface GDatePickerProps{
    label?:string;
    date: Date | null;
    dateDelete?: boolean;
    onChange:(date:Date | null)=>void
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

export function GDatePicker({label, date, dateDelete=false, onChange}:GDatePickerProps){
    const datepickerRef = useRef<DatePicker>(null);
    const handleClickDatepickerIcon =() => {
        const datepickerElement = datepickerRef.current;
        datepickerElement?.setFocus();
    }
    const cleanDate = ()=>{
        onChange(null);
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
            {(!date || !(date && dateDelete)) && <EventIcon className="date-icon" onClick={() => handleClickDatepickerIcon()}/>}
            {date && dateDelete && <HighlightOffIcon className="date-icon" onClick={() => cleanDate()}/>}
        </Box>
    )
}