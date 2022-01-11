import DatePicker from 'react-datepicker';
import { FormikValues, FormikProps } from 'formik';
import { Box, Input, InputLabel, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import "react-datepicker/dist/react-datepicker.css";
import './g-date-picker.scss';
import { useRef } from 'react';
import { relative } from 'path';

interface GDatePickerProps{
    label?:string;
    date: Date | null;
    dateDelete?: boolean;
    onChange:(date:Date | null)=>void
}

interface GFormDatePickerProps<T extends FormikValues>{
    formik: FormikProps<T>;
    id:string;
    label?:string
    dateDelete?: boolean;
    timeonly?:boolean;
}

 
export default function GFormDatePicker<T extends FormikValues>({formik, id, label, dateDelete, timeonly}:GFormDatePickerProps<T>){
    const {setFieldValue} = formik;

    const timeProps:any ={};
    if(timeonly){
        timeProps['showTimeSelect']=true
        timeProps['showTimeSelectOnly']=true
        timeProps['timeIntervals']=5
        timeProps['timeCaption']="Time"
        timeProps['dateFormat']="h:mm aa"
    }

    const datepickerRef = useRef<DatePicker>(null);
    const handleClickDatepickerIcon =() => {
        const datepickerElement = datepickerRef.current;
        datepickerElement?.setFocus();
    }

    return (
        <Box className="g-date-picker">
            <InputLabel id={id}>{label}</InputLabel>
            <Box sx={{position:"relative"}}>
                <DatePicker
                    {...timeProps}
                    selected={formik.values[id]}
                    ref={datepickerRef}
                    onChange={(value)=>{
                        setFieldValue(id, value, true);
                    }}
                />
                {timeonly && (!formik.values[id] || !(formik.values[id] && dateDelete)) && <AccessTimeIcon className="form-date-icon" onClick={() => handleClickDatepickerIcon()}/>}
                {!timeonly && (!formik.values[id] || !(formik.values[id] && dateDelete)) && <EventIcon className="form-date-icon" onClick={() => handleClickDatepickerIcon()}/>}
                {formik.values[id] && dateDelete && <HighlightOffIcon className="form-date-icon" onClick={() => setFieldValue(id, null, true)}/>}
            </Box>
            {formik.touched && formik.errors[id] && 
                <Typography variant="error" component="div">
                    {formik.errors[id]}
                </Typography>
            }
        </Box>
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
            <Box sx={{position:"relative"}}>
                <DatePicker
                    selected={date}
                    onChange={onChange}
                    ref={datepickerRef}
                    placeholderText="Select Date"
                />
            </Box>
            {(!date || !(date && dateDelete)) && <EventIcon className="date-icon" onClick={() => handleClickDatepickerIcon()}/>}
            {date && dateDelete && <HighlightOffIcon className="date-icon" onClick={() => cleanDate()}/>}
        </Box>
    )
}