import boardData from './boardData';
import userData from './userData';
import userBoardData from './userBoards';
// import pinData from './pinsData';
// import utilsPin from '../../components/pins';

const getSingleUserBoard = (user) => new Promise((resolve, reject) => {
  const userId = userData.getUserById(user)
    .then((response) => {
      const memeUser = response.data;
      // console.error(user);
      memeUser.id = user;
      userId.boards = [];
      userBoardData.getUserBoards(memeUser.uid).then((memePins) => {
        boardData.getBoards().then((allMemes) => {
          memePins.forEach((userMemes) => {
            const userBoard = allMemes.find((b) => b.id === userMemes.boardId);
            userId.boards.push(userBoard);
          });
          resolve(memeUser);
        });
      });
      console.error(userId.boards);
    })
    .catch((err) => reject(err));
});

const removeBoard = (boardId) => new Promise((resolve, reject) => {
  boardData.deleteBoard(boardId)
    .then(() => {
      userBoardData.getUserBoards(boardId).then((userBoards) => {
        userBoards.forEach((userMemes) => {
          userBoardData.getUserBoards(userMemes.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleUserBoard, removeBoard };
