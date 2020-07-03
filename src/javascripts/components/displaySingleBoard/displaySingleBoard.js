import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import displayPins from '../pins/pins';

const displaySingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  smash.getSingleUserBoard(boardId)
    .then((user) => {
      let domString = '<div class="d-flex flex-wrap">';
      user.boards.forEach(() => {
        domString += displayPins.pinMaker();
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { displaySingleBoard };
