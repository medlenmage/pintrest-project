import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import sign from './helpers/data/authData';
import boardPrint from './components/displayBoards/displayBoards';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  auth.signInEvent();
  auth.logoutEvent();
  sign.checkLoginStatus();
  boardPrint.displayBoards();
};

init();
