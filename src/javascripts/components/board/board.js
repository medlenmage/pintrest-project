const boardMaker = (board) => {
  const domString = `
    <div class="col-3">
      <div class="card border-0 rounded-0 bg-dark text-light" id=${board.id}>
        <div class="card-body">
          <div class="card-header text-center"><h5>${board.name}</h5></div>
          <button class="btn btn-danger delete-board"><i class="far fa-trash-alt"></i>  Delete Board</button>
        </div>
      </div>
    </div>
  `;
  return domString;
};

export default { boardMaker };
