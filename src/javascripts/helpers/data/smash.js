import boardData from './boardData';
import userData from './userData';
import userBoardData from './userBoards';
// import pinData from './pinsData';
// import utilsPin from '../../components/pins';

const getSingleUserBoard = (user) => new Promise((resolve, reject) => {
  const userId = userData.getUserById(user)
    .then(() => {
      // const memeUser = response.data;
      // console.error(user);
      // memeUser.id = userId;
      userId.boards = [];
      userBoardData.getUserBoards(userId).then((memePins) => {
        boardData.getBoards().then((allMemes) => {
          allMemes.forEach((userMemes) => {
            const userBoard = memePins.find((b) => b.id === userMemes.boardId);
            userId.boards.push(userBoard);
          });
          resolve(user);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleUserBoard };
