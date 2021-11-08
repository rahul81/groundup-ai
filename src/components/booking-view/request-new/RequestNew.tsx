import { DialogProps, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Input, InputLabel, FormControl, MenuItem, Select, NativeSelect } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import { requestNewValidationSchema } from './RequestNewFormValidation';
import './request-new.scss'


interface RequestNewFormFields{
    contractor:string
}

interface RequestNewProps{
    open:boolean;
    showDialog?: (status:boolean)=>void;
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
        <Dialog disablePortal
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 , minHeight: '50%'} }}
            maxWidth="xs"
            open={open}
            onClose={showDialog}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Request Booking</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                tabIndex={-1}
            >
                <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                    <InputLabel id="contractor">Contractor</InputLabel>
                    <Input required fullWidth id="contractor" aria-label="contractor"
                        name="contractor" autoComplete="contractor" autoFocus 
                        value={formik.values.contractor}
                        onChange={formik.handleChange}
                        error={formik.touched.contractor && Boolean(formik.errors.contractor)}/>
                </form> 
            </DialogContentText>
            </DialogContent>
            <DialogActions sx={{display: 'flex', justifyContent:'left'}}>
                    <Button variant="contained" type="submit" form="request-new-form">Submit</Button>
            </DialogActions>
        </Dialog>
    )
}
