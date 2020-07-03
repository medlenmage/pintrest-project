import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUserBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userBoards.json`)
    .then((response) => {
      const userBoardObjects = response.data;
      const userBoards = [];
      if (userBoardObjects) {
        Object.keys(userBoardObjects).forEach((userBoardId) => {
          userBoardObjects[userBoardId].id = userBoardId;
          userBoards.push(userBoardObjects[userBoardId]);
        });
      }
      resolve(userBoards);
    })
    .catch((err) => reject(err));
});

export default { getUserBoards };
