import utils from '../../helpers/utils';

const newPin = () => {
  const domString = `
    <form>
    <div class="form-group">
      <label for="pin-descrip">Pin Description</label>
      <input type="text" class="form-control" id="pin-descrip" placeholder="Describe Pin">
    </div>
    <div class="form-group">
      <label for="pin-img">Another label</label>
      <input type="text" class="form-control" id="pin-img" placeholder="Img URL">
    </div>
    <div class="form-group">
      <label for="pin-title">Pin Title</label>
      <input type="text" class="form-control" id="pin-title" placeholder="Pin Title Here">
    </div>
    <button type="button" class="btn btn-dark add-pin">Add Pin</button>
  </form>
  `;
  utils.printToDom('#new-pin-form', domString);
};

export default { newPin };
