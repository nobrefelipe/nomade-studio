
import Firebase from 'firebase';


// Initialize Firebase
let config = {
    apiKey: "AIzaSyA_VxldzPCbmetaDs1aOaMn09KcyoHEiv0",
    authDomain: "studio-nomade.firebaseapp.com",
    databaseURL: "https://studio-nomade.firebaseio.com",
    projectId: "studio-nomade",
    storageBucket: "studio-nomade.appspot.com",
    messagingSenderId: "79526779021"
};

let firebaseApp = Firebase.initializeApp(config);

export default firebaseApp;