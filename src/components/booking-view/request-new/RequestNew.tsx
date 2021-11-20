import { DialogProps, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Input, InputLabel, FormControl, MenuItem, Select, NativeSelect, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import { requestNewValidationSchema } from './RequestNewFormValidation';
import CloseIcon from '@mui/icons-material/Close';
import './request-new.scss'
import GDialog from '../../common/dialog/GDialog';
import GInput from '../../common/input/GInput';
import { GFormSelect, GSelectOption } from '../../common/select/GSelect';


interface RequestNewFormFields{
    contractor:string;
    zone:string | number;
}

interface RequestNewProps{
    open:boolean;
    showDialog: (status:boolean)=>void;
    handleSubmit: (data:any)=>void;
}

export default function RequestNew({open, showDialog, handleSubmit}:RequestNewProps) {
    const initialValues: RequestNewFormFields = {contractor: '', zone: ''};
    const zones:GSelectOption[] = [
        {key:"zone1", value:"Zone1"},
        {key:"zone2", value:"Zone2"},
        {key:"zone3", value:"Zone3"}
    ];

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: requestNewValidationSchema,
        validateOnChange: false,
        onSubmit: (data)=>{
            handleSubmit(data)
        },
    });
   
    return (
        <GDialog title="Request Booking" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GInput<RequestNewFormFields> formik={formik} id="contractor" label="Contractor"/>
                <GFormSelect<RequestNewFormFields> formik={formik} id="zone" label="Zone" options={zones}/>
            </form> 
        </GDialog>
    )
}
