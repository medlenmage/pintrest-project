import boardData from './boardData';
import userData from './userData';
import userBoardData from './userBoards';

const getSingleUserBoard = (userId) => new Promise((resolve, reject) => {
  userData.getUserById(userId)
    .then((response) => {
      const user = response.data;
      user.id = userId;
      user.boards = [];
      userBoardData.getUserBoards(user.id).then((userBoards) => {
        boardData.getBoards().then((allBoards) => {
          userBoards.forEach((userBoard) => {
            const usrBoard = allBoards.find((b) => b.id === userBoard.boardId);
            user.boards.push(usrBoard);
          });
          resolve(user);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleUserBoard };
