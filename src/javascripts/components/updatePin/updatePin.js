import utils from '../../helpers/utils';
import pinsData from '../../helpers/data/pinsData';
import printPins from '../displaySingleBoard/displaySingleBoard';

const changeBoard = (pinId) => {
  const domString = `
        <form class="pin-board-update hide" id="${pinId.id}">
          <div class="form-group" id="${pinId.boardId}">
            <label for="edit-pin-board">Email address</label>
            <input type="email" class="form-control" id="edit-pin-board" aria-describedby="emailHelp">
          </div>
          <button type="submit" class="btn btn-primary" id="submit-edited-pin">Submit</button>
        </form>
  `;
  utils.printToDom('#pin-edit-form', domString);
};

const showUpdateForm = (e) => {
  const pin = e.target.closest('.card-pin').id;
  changeBoard(pin);
  $('.pin-board-update').removeClass('hide');
};

const sumbitEdit = (e) => {
  e.preventDefault();
  const switchBoard = {
    boardId: $('#edit-pin-board').val(),
  };
  pinsData.updatePin(switchBoard)
    .then(() => {
      const boardId = e.target.closest('.form-group').id;
      printPins.buildMemes(boardId);
      utils.printToDom('#edited-pins', '');
    })
    .catch((err) => console.error('could not update pin', err));
};

const updateEvents = () => {
  $('body').on('click', '#edit-pin', showUpdateForm);
  $('body').on('click', '#submit-edited-pin', sumbitEdit);
};

export default { updateEvents };
