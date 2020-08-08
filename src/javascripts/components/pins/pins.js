const pinMaker = (meme) => {
  const domString = `
    <div class="col-3 board-id" id="${meme.boardId}">
      <div class="card-pin border-0 rounded-0 bg-dark text-light" id="${meme.id}">
        <img src="${meme.imgUrl}">
        <div class="card-header text-center"><h5>${meme.name}</h5></div>
        <p>${meme.description}</p>
        <button class="btn btn-danger delete-pin"><i class="far fa-trash-alt"></i> Delete Pin</button>
        <button type="button" class="btn btn-warning update-pin" id="edit-pin">Change Board</button>
      </div>
    </div>
  `;
  return domString;
};

export default { pinMaker };
