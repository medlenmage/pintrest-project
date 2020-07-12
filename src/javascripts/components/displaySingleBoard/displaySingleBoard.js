import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import displayPins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';

const deletePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  console.error(pinId);
  smash.removePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildMemes();
      utils.printToDom('#pins', '');
    })
    .catch((err) => console.error('could not delete board', err));
};

const buildMemes = (e) => {
  const boardId = e.target.closest('.card').id;
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      console.warn(pins);
      let domString = `<h3 class="pins-header">Pins</h3>
      <div class="d-flex flex-wrap">
      `;
      pins.forEach((meme) => {
        console.error(meme);
        domString += displayPins.pinMaker(meme);
      });
      utils.printToDom('#pins', domString);
      $('body').on('click', '.delete-pin', deletePinEvent);
    })
    .catch((err) => console.error("get pins by id didn't work", err));
};

const hideBoards = (e) => {
  e.preventDefault();
  $('#boards').addClass('hide');
  $('#pins').removeClass('hide');
};

const displayMemes = () => {
  $('body').on('click', '#board1', buildMemes);
  $('body').on('click', '#board1', hideBoards);
  $('body').on('click', '#board2', buildMemes);
  $('body').on('click', '#board2', hideBoards);
  $('body').on('click', '#board3', buildMemes);
  $('body').on('click', '#board3', hideBoards);
};

export default { buildMemes, displayMemes, deletePinEvent };
