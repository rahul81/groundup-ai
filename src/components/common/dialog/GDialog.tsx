import { Dialog, DialogTitle, Typography, IconButton, DialogContent, DialogContentText, InputLabel, Input, DialogActions, Button, DialogProps } from '@mui/material'
import React, { useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './g-dialog.scss'

interface GDialogProps{
    children: React.ReactNode;
    title: string;
    open:boolean;
    size? : 'small' | 'medium' | 'large'
    showDialog: (status:boolean)=>void;
}
export default function GDialog(props: GDialogProps) {
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const {open, showDialog, size="small"} = props;
    
    return (
        <Dialog
            disablePortal
            open={open}
            onClose={showDialog}
            scroll={scroll}
            fullWidth={true}
            maxWidth = {`${size === 'medium' ? 'sm' : size === 'large' ? 'md' : 'xs'}`}
            className="dialog-container"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title" className="dialog-title">
                <Typography variant="h6" component={'span'}>{props.title}</Typography>
                <IconButton onClick={()=>showDialog(false)}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText component={'span'}
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
