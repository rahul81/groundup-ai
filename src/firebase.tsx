import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

// var firebaseConfig = {
//   apiKey: "AIzaSyBD0HKEXXVjLSJsDMe_F_b8t6WKa4TZzP0",
//   authDomain: "grown-upai.firebaseapp.com",
//   projectId: "grown-upai",
//   storageBucket: "grown-upai.appspot.com",
//   messagingSenderId: "471957459707",
//   appId: "1:471957459707:web:c23ee06534fdcae69ad65e",
//   measurementId: "G-BV5M0V27TZ"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDCUHhhk5L3M0UnJylb_AxJ0oO6dH1KUEc",
  authDomain: "groundai-notif.firebaseapp.com",
  projectId: "groundai-notif",
  storageBucket: "groundai-notif.appspot.com",
  messagingSenderId: "373248751946",
  appId: "1:373248751946:web:2fa47ad7d2452df38de9b3"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = () => {
  // BG9IJixpYJYPBlh0AqhUtxq371CrNPKboP7Sfp9jjQ_2TsEk9vrBZDtdnYO4kj2wd-XBnMiCJllGyi05v4-wj0I
  return messaging.getToken({vapidKey: 'BIQdxWyXIfFEFNB4jj3kW-f2qUgee8xvHkPfPNl6TzQy3tn98fnrGAeop7zdpETnwLldZDxbs54O0CyUmWBzn5k'}).then((currentToken) => {
   console.log(currentToken)
   console.log('currentToken')
    if (currentToken) {
      console.log('current token for client: ', currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});