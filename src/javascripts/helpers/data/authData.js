import firebase from 'firebase/app';
import 'firebase/auth';
import boardEvent from '../../components/displayBoards/displayBoards';
import singleBoard from '../../components/displaySingleBoard/displaySingleBoard';

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

      boardEvent.boardEvents();
      singleBoard.memeEvents();
    } else {
      getSignInBtn.removeClass('hide');
      getSignOutBtn.addClass('hide');
      getLoggedInHeader.removeClass('hide');
      getLoggedOutHeader.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
