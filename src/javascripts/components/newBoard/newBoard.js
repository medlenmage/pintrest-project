import utils from '../../helpers/utils';

const newBoards = () => {
  const domString = `
    <form>
    <div class="form-group">
      <label for="board-name">Board Name</label>
      <input type="text" class="form-control" id="board-name" placeholder="Board Name">
    </div>
    <div class="form-group">
      <label for="board-descrip">Board Description</label>
      <input type="text" class="form-control" id="board-descrip" placeholder="Board Description">
    </div>
    <button type="button" class="btn btn-dark add-board">Add Board</button>
  </form>
  `;
  utils.printToDom('#new-board-form', domString);
  console.error('this is working');
};

export default { newBoards };
