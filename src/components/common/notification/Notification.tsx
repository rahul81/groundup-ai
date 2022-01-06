import React from 'react'
import { useSnackbar } from 'notistack';

const Notification = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const setNotification = (message: string) => {
        enqueueSnackbar(message);
    };
    return { setNotification }
}

export default Notification
