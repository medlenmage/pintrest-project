const returnBoards = () => {
  $('#boards').removeClass('hide');
  $('#pins').addClass('hide');
};

const returnBoardsEvent = () => $('#all-boards').on('click', returnBoards);

export default { returnBoardsEvent };
