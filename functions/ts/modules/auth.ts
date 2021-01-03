import firebase from "firebase/app";
import "firebase/auth";
// GOOGLE
const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({
  login_hint: "user@example.com",
});

firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential as firebase.auth.OAuthCredential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });

// Then, you can also retrieve the Google provider's OAuth token by calling getRedirectResult when your page loads:
firebase
  .auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential as firebase.auth.OAuthCredential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
