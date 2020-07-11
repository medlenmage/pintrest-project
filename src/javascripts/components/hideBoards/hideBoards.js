// import axios from 'axios';
// import apiKeys from '../../helpers/apiKeys.json';
// import boardData from '../../helpers/data/boardData';

// const baseUrl = apiKeys.firebaseConfig.databaseURL;

const hideBoards = (e) => {
  e.preventDefault();
  $('#board1').addClass('.hide');
  $('#board2').addClass('.hide');
  $('#board3').addClass('.hide');
};

export default { hideBoards };
