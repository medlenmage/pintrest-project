import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Users.json`)
    .then((response) => {
      const userObjects = response.data;
      const users = [];
      if (userObjects) {
        Object.keys(userObjects).forEach((userId) => {
          userObjects[userId].id = userId;
          users.push(userObjects[userId]);
        });
      }
      resolve(users);
    })
    .catch((err) => reject(err));
});

const getUserById = (userId) => axios.get(`${baseUrl}/Users/${userId}.json`);

export default { getUsers, getUserById };
