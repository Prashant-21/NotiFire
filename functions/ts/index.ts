// This is pug js branch
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const functions = require("firebase-functions");

//Location where layouts will be rendered
const page = document.querySelector("div.doc") as HTMLDivElement;

// Rendering Layouts
const pug = require("pug");

// Compile the source code
const compiledFunction = pug.compileFile("home.pug");

// Render a set of data
// console.log(
//   compiledFunction({
//     name: "Timothy",
//   })
// );
// "<p> #{name}Timothy's Pug source code!</p>"

page.appendChild(compiledFunction);
// Layouts Rendered Above

// Google Authentication
// firebase.auth().languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage();

// To sign in by redirecting to the sign-in page, call signInWithRedirect:
firebase.auth().signInWithRedirect(provider);

// To sign out a user, call signOut:
firebase
  .auth()
  .signOut()
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });

// Firestore Database
const db = firebase.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
