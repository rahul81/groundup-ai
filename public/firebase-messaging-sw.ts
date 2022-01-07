
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBD0HKEXXVjLSJsDMe_F_b8t6WKa4TZzP0",
    authDomain: "grown-upai.firebaseapp.com",
    projectId: "grown-upai",
    storageBucket: "grown-upai.appspot.com",
    messagingSenderId: "471957459707",
    appId: "1:471957459707:web:c23ee06534fdcae69ad65e",
    measurementId: "G-BV5M0V27TZ"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

 messaging.setBackgroundMessageHandler(function (payload) {
    console.log('setBackgroundMessageHandler background message ', payload);

    const promiseChain = clients
       .matchAll({
           type: "window",
           includeUncontrolled: true
       })
      .then(windowClients => {
           for (let i = 0; i < windowClients.length; i++) {
              const windowClient = windowClients[i];
              windowClient.postMessage(payload);
           }
      })
      .then(() => {
           return self.registration.showNotification("my notification title");
       });
      return promiseChain;
  });