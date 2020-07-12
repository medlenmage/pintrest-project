const returnBoards = () => {
  $('#boards').removeClass('hide');
  $('#pins').addClass('hide');
  $('#new-board').removeClass('hide');
};

const returnBoardsEvent = () => $('#all-boards').on('click', returnBoards);

export default { returnBoardsEvent };
