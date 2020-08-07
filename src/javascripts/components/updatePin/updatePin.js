import utils from '../../helpers/utils';

const changeBoard = () => {
  const domString = `
  <form>
    <div class="form-group">
      <label for="edit-pin-board">Email address</label>
      <input type="email" class="form-control" id="edit-pin-board" aria-describedby="emailHelp" placeholder="Board Id here">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
  utils.printToDom('#pin-edit-form', domString);
  console.error('this thing working?');
};

export default { changeBoard };
