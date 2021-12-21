import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// Boiler code to call GToast component
// const [open, setOpen] = useState(false);
// const notificationToggleState = () => {
//     setOpen(!open);
// };
// notificationToggleState()

interface GToastProps {
    severity: 'success' | 'info' | 'warning' | 'error';
    message: string;
    autoHideDuration?: number;
    notificationToggleState: ()=>void;
    open : boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function GToast(props: GToastProps) {
    const { autoHideDuration = 6000 } = props;

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={props.open} autoHideDuration={autoHideDuration} onClose={props.notificationToggleState}>
                <Alert onClose={props.notificationToggleState} severity={props.severity} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
