import { Dialog, DialogTitle, Typography, IconButton, DialogContent, DialogContentText, InputLabel, Input, DialogActions, Button, DialogProps } from '@mui/material'
import React, { useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './g-dialog.scss'

interface GDialogProps{
    children: React.ReactNode;
    title: string;
    open:boolean;
    showDialog: (status:boolean)=>void;
}
export default function GDialog(props: GDialogProps) {
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const {open, showDialog} = props;
    
    return (
        <Dialog
            disablePortal
            maxWidth="xs"
            open={open}
            onClose={showDialog}
            scroll={scroll}
            className="dialog-container"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title" className="dialog-title">
                <Typography variant="h6" component="h2">{props.title}</Typography>
                <IconButton onClick={()=>showDialog(false)}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}>
                    {props.children}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{display: 'flex', justifyContent:'left'}}>
                    <Button variant="contained" type="submit" form="request-new-form">Submit</Button>
            </DialogActions>
        </Dialog>
    )
}
