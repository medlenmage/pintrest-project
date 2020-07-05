import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import displayPins from '../pins/pins';

const buildMemes = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error(boardId);
  smash.getSingleUserBoard(boardId)
    .then((userId) => {
      let domString = '';
      userId.boards.forEach((meme) => {
        domString += displayPins.pinMaker(meme);
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error(err));
};

const displayMemes = () => {
  $('body').click('#board1', buildMemes);
  // $('#board2').click(buildMemes);
  // $('#board3').click(buildMemes);
};

export default { buildMemes, displayMemes };
