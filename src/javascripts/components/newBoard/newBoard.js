const newBoard = () => {
  const domString = `
    <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Example label</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
    </div>
    <button type="button" class="btn btn-dark">Dark</button>
  </form>
  `;
  return domString;
};

export default { newBoard };
