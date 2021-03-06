import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Pins.json`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      if (pinObjects) {
        Object.keys(pinObjects).forEach((pinId) => {
          pinObjects[pinId].id = pinId;
          pins.push(pinObjects[pinId]);
        });
      }
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      // turn firebase response into an array of objects
      const pinObjects = response.data;
      const pins = [];
      if (pinObjects) {
        Object.keys(pinObjects).forEach((pinId) => {
          pinObjects[pinId].id = pinId;
          pins.push(pinObjects[pinId]);
        });
      }
      resolve(pins);
    })
    .catch((err) => reject(err));
});

export default { getPins, getPinsByBoardId };
