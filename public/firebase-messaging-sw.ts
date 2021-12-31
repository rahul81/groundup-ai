// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyB1nVE7-w-LlhIc4jlpZHDxVtx12Xe0WqM",
    authDomain: "web-notifications-e7d5b.firebaseapp.com",
    projectId: "web-notifications-e7d5b",
    storageBucket: "web-notifications-e7d5b.appspot.com",
    messagingSenderId: "442807750218",
    appId: "1:442807750218:web:f340c99155e8bbad5120b3",
    measurementId: "G-KSG150WNV0"
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