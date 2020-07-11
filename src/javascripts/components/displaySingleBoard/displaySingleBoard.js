// import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import displayPins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';

const buildMemes = (e) => {
  // find user id somehow of board i clicked on
  // eslint-disable-next-line prefer-destructuring
  // const userId = e.target.closest('.card').dataset.userId;
  // smash.getSingleUserBoard(userId)
  //   .then((memeUser) => {
  //     let domString = '';
  //     memeUser.boards.forEach((meme) => {
  //       domString += displayPins.pinMaker(meme);
  //     });
  //     utils.printToDom('#pins', domString);
  //   })
  //   .catch((err) => console.error(err));
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

export default { buildMemes, displayMemes };
