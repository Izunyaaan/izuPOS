// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjNKJlfSnokMjCGPvstAph-ME-x6RzAK4",
    authDomain: "izupos-6242c.firebaseapp.com",
    projectId: "izupos-6242c",
    storageBucket: "izupos-6242c.appspot.com",
    messagingSenderId: "427652432471",
    appId: "1:427652432471:web:d42925164861c7bd1b1912",
    measurementId: "G-CNRP1MN94Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore

const db = app.firebaseApp.firestore();
const menuCollection = db.collection("menu");

//CRUD functions

export const addMenu = menu => {
    return menuCollection.add(menu);
}

export const getMenu = async () => {
    const menu = await menuCollection.get();
    return menu;
}

export const updateMenu = (id, menu) => {
    return menuCollection.doc(id).update(menu);
}

export const deleteMenu = id => {
    return menuCollection.doc(id).delete();
}