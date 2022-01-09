
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//     apiKey: "AIzaSyBD0HKEXXVjLSJsDMe_F_b8t6WKa4TZzP0",
//     authDomain: "grown-upai.firebaseapp.com",
//     projectId: "grown-upai",
//     storageBucket: "grown-upai.appspot.com",
//     messagingSenderId: "471957459707",
//     appId: "1:471957459707:web:c23ee06534fdcae69ad65e",
//     measurementId: "G-BV5M0V27TZ"
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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });

//  messaging.setBackgroundMessageHandler(function (payload) {
//     console.log('setBackgroundMessageHandler background message ', payload);

//     const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//        })
//       .then(windowClients => {
//            for (let i = 0; i < windowClients.length; i++) {
//               const windowClient = windowClients[i];
//               windowClient.postMessage(payload);
//            }
//       })
//       .then(() => {
//            return self.registration.showNotification("my notification title");
//        });
//       return promiseChain;
//   });