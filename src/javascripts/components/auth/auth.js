import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const logoutEvent = () => {
  $('#sign-out').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const signInEvent = () => {
  $('#sign-in').click((e) => {
    e.preventDefault();
    signMeIn();
    // console.error('this thing work?');
  });
};

export default { signInEvent, logoutEvent };
