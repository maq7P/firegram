import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB5HqhlZvnhAF-UdC9DAQTi4I_eDKSiM2s",
    authDomain: "firegram-4e9d4.firebaseapp.com",
    projectId: "firegram-4e9d4",
    storageBucket: "firegram-4e9d4.appspot.com",
    messagingSenderId: "7259330395",
    appId: "1:7259330395:web:17d57839847adb6f33ac7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {
    projectStorage,
    projectFirestore
}