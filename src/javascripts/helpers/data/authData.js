import firebase from 'firebase/app';
import 'firebase/auth';

const getSignInBtn = $('#sign-in');
const getSignOutBtn = $('#sign-out');
const getLoggedInHeader = $('#logged-out');
const getLoggedOutHeader = $('#logged-in');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      getSignInBtn.addClass('hide');
      getSignOutBtn.removeClass('hide');
      getLoggedInHeader.addClass('hide');
      getLoggedOutHeader.removeClass('hide');
    } else {
      getSignInBtn.removeClass('hide');
      getSignOutBtn.addClass('hide');
      getLoggedInHeader.removeClass('hide');
      getLoggedOutHeader.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
