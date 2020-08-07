import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import displayPins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';
import newPins from '../newPin/newPin';

const deletePinEvent = (e) => {
  const pinId = e.target.closest('.card-pin').id;
  smash.removePin(pinId)
    .then(() => {
      const getBoardId = e.target.closest('.board-id').id;
      // eslint-disable-next-line no-use-before-define
      buildMemes(getBoardId);
      utils.printToDom('#pins', '');
    })
    .catch((err) => console.error('could not delete board', err));
};

const buildMemes = (boardId) => {
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = `<h3 class="pins-header">Pins</h3>
      <div class="d-flex flex-wrap">
      `;
      pins.forEach((meme) => {
        domString += displayPins.pinMaker(meme);
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error("get pins by id didn't work", err));
};

const pinBoardId = (e) => {
  const boardId = e.target.closest('.card').id;
  buildMemes(boardId);
};

const addNewPinEvent = (e) => {
  e.preventDefault();

  const newMemes = {
    description: $('#pin-descrip').val(),
    imgUrl: $('#pin-img').val(),
    name: $('#pin-title').val(),
    boardId: $('#pin-board').val(),
  };

  pinsData.addPin(newMemes)
    .then(() => {
      buildMemes();
      utils.printToDom('#pins', ' ');
    })
    .catch((err) => console.error("couldn't add pin", err));
  $('#new-pin-form').addClass('hide');
};

const hideEvents = (e) => {
  e.preventDefault();
  $('#boards').addClass('hide');
  $('#pins').removeClass('hide');
  $('#new-board').addClass('hide');
  $('#new-board-form').addClass('hide');
  $('#new-pin').removeClass('hide');
};

const memeEvents = () => {
  $('body').on('click', '#board1', pinBoardId);
  $('body').on('click', '#board1', hideEvents);
  $('body').on('click', '#board2', buildMemes);
  $('body').on('click', '#board2', hideEvents);
  $('body').on('click', '#board3', buildMemes);
  $('body').on('click', '#board3', hideEvents);
  $('body').on('click', '#new-pin', newPins.newPin);
  $('body').on('click', '.add-pin', addNewPinEvent);
  $('body').on('click', '.delete-pin', deletePinEvent);
};

export default { buildMemes, memeEvents };
