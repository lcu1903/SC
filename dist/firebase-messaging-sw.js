importScripts(
    "https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyChyc3FRnAzhzQ5IB84JDTmDFfAgBq_Kes",
    authDomain: "cmms-techpro-testing.firebaseapp.com",
    projectId: "cmms-techpro-testing",
    storageBucket: "cmms-techpro-testing.appspot.com",
    messagingSenderId: "107740791615",
    appId: "1:107740791615:web:f3b8dea8cac50089e3c98a",
    measurementId: "G-8T0VBCVJ4T"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
