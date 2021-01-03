// Email.js
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

// index.js
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//Google auth

firebase.auth().languageCode = "it";
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// To sign in by redirecting to the sign-in page, call signInWithRedirect
firebase.auth().signInWithRedirect(provider);

// Signout
firebase
  .auth()
  .signOut()
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
