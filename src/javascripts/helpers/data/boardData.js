import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Boards.json`)
    .then((response) => {
      const boardObjects = response.data;
      const boards = [];
      if (boardObjects) {
        Object.keys(boardObjects).forEach((boardId) => {
          boardObjects[boardId].id = boardId;
          boards.push(boardObjects[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const boardsId = (boardId) => axios.get(`${baseUrl}/Boards/${boardId}.json`);

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/Boards/${boardId}.json`);

const addBoard = (newBoardObj) => axios.post(`${baseUrl}/Boards.json`, newBoardObj);

export default {
  getBoards,
  boardsId,
  deleteBoard,
  addBoard,
};
