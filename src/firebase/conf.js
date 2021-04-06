import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqQAJ1ykUcNXtr0KS0wflheW2QBselWX4",
    authDomain: "rental-tco.firebaseapp.com",
    projectId: "rental-tco",
    storageBucket: "rental-tco.appspot.com",
    messagingSenderId: "1085220550177",
    appId: "1:1085220550177:web:4d827a43d310782c905560",
    measurementId: "G-HX9LHX7XWR"
};
// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();