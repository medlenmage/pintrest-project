/* eslint-disable no-undef */
const boardMaker = () => {
  const domString = `
  <div class="card" style="width: 18rem;" id="${boards.id}">
    <div class="board-name">${boards.name}</div>
    <div class="card-body">
      <p class="card-text">${boards.description}</p>
    </div>
</div>
  `;
  return domString;
};

export default { boardMaker };
