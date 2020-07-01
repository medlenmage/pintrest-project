import boardPrint from '../board/board';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';

const displayBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      console.error('get boards worked', boards);
      let domString = '';

      boards.forEach((board) => {
        domString += boardPrint.boardMaker(board);
      });
      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('get boards broke :(', err));
};

export default { displayBoards };
