import axios from 'axios';
import boardData from './boardData';
// import userData from './userData';
import userBoardData from './userBoards';
import apiKeys from '../apiKeys.json';
import pinData from './pinsData';
// import utilsPin from '../../components/pins';
const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getSingleUserBoard = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      const memeUser = response.data;
      console.error(memeUser);
      memeUser.id = userId;
      memeUser.boards = [];
      userBoardData.getUserBoards(memeUser).then((memePins) => {
        boardData.getBoards().then((allMemes) => {
          memePins.forEach((userMemes) => {
            const userBoard = allMemes.find((b) => b.id === userMemes.boardId);
            userId.boards.push(userBoard);
          });
          resolve(memeUser);
        });
      });
      console.error(userId.boards);
    })
    .catch((err) => reject(err));
});

const removeBoard = (boardId) => new Promise((resolve, reject) => {
  boardData.deleteBoard(boardId)
    .then(() => {
      userBoardData.getUserBoards(boardId).then((userBoards) => {
        userBoards.forEach((userMemes) => {
          userBoardData.getUserBoards(userMemes.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

const removePin = (pinId) => new Promise((resolve, reject) => {
  pinData.deletePin(pinId)
    .then(() => {
      pinData.getPins(pinId).then((pins) => {
        pins.forEach((pin) => {
          pinData.getPins(pin.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleUserBoard, removeBoard, removePin };
