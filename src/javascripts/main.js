import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import sign from './helpers/data/authData';
import boardPrint from './components/displayBoards/displayBoards';
import singleMemes from './components/displaySingleBoard/displaySingleBoard';
import returnBoards from './components/Home/home';
// import pins from './components/displayPins/displayPins';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  auth.signInEvent();
  auth.logoutEvent();
  sign.checkLoginStatus();
  boardPrint.displayBoards();
  singleMemes.displayMemes();
  returnBoards.returnBoardsEvent();
  singleMemes.deletePinEvent();
};

init();
