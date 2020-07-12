import boardPrint from '../board/board';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import newBoard from '../newBoard/newBoard';

const deleteBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error(boardId);
  smash.removeBoard(boardId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      displayBoards();
      utils.printToDom('#boards', '');
    })
    .catch((err) => console.error('could not delete board', err));
};

const displayBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <div class="d-flex flex-wrap" id="hide-board">
      `;

      boards.forEach((board) => {
        domString += boardPrint.boardMaker(board);
      });
      utils.printToDom('#boards', domString);
      $('body').on('click', '.delete-board', deleteBoardEvent);
    })
    .catch((err) => console.error('get boards broke :(', err));
};

const boardEvents = () => {
  $('body').on('click', '.delete-board', deleteBoardEvent);
  $('body').on('click', '#new-board', newBoard.newBoards);
};

export default { displayBoards, boardEvents };
