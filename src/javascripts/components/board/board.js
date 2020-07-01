/* eslint-disable no-undef */
const boardMaker = (board) => {
  const domString = `
  <div class="card" style="width: 18rem;" id="${board.id}">
    <div class="board-name">${board.name}</div>
    <div class="card-body">
      <p class="card-text">${board.description}</p>
    </div>
</div>
  `;
  return domString;
};

export default { boardMaker };
