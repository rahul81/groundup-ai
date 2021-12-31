import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import { firebaseConfig, vapidKey } from './constants/Api';

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getTokenFirebase = (setTokenFound: any) => {
    return messaging.getToken({ vapidKey: vapidKey }).then((currentToken: any) => {
        if (currentToken) {
            console.log(currentToken);
            setTokenFound(true)
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false)
        }
    }).catch((err: any) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

export default getTokenFirebase;


export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});