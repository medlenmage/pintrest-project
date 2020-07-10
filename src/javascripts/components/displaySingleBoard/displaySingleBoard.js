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
      let domString = '';
      pins.Pins.forEach((meme) => {
        domString += displayPins.pinMaker(meme);
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error("get pins by id didn't work", err));
};

const displayMemes = () => {
  $('body').click('#board1', buildMemes);
  // $('#board2').click(buildMemes);
  // $('#board3').click(buildMemes);
};

export default { buildMemes, displayMemes };
