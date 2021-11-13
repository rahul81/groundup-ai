import { DialogProps, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Input, InputLabel, FormControl, MenuItem, Select, NativeSelect, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import { requestNewValidationSchema } from './RequestNewFormValidation';
import CloseIcon from '@mui/icons-material/Close';
import './request-new.scss'
import GDialog from '../../common/dialog/GDialog';


interface RequestNewFormFields{
    contractor:string
}

interface RequestNewProps{
    open:boolean;
    showDialog: (status:boolean)=>void;
    handleSubmit: (data:any)=>void;
}

export default function RequestNew({open, showDialog, handleSubmit}:RequestNewProps) {
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const initialValues:RequestNewFormFields = {contractor: ''};
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: requestNewValidationSchema,
        onSubmit: (data)=>{
            handleSubmit(data)
        },
    });
   
    return (
        <GDialog title="Request Booking" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <InputLabel id="contractor">Contractor</InputLabel>
                <Input required fullWidth id="contractor" aria-label="contractor"
                    name="contractor" autoComplete="contractor" autoFocus 
                    value={formik.values.contractor}
                    onChange={formik.handleChange}
                    error={formik.touched.contractor && Boolean(formik.errors.contractor)}/>
            </form> 
        </GDialog>
    )
}
