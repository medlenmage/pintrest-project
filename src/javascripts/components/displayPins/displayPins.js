import displayPins from '../pins/pins';
import utils from '../../helpers/utils';
import pinData from '../../helpers/data/pinsData';

const printPins = () => {
  pinData.getPins()
    .then((pins) => {
      console.error('get pins worked', pins);
      let domString = `
      <div class="d-flex flex-wrap">
      `;

      pins.forEach((pin) => {
        domString += displayPins.pinMaker(pin);
      });
      utils.printToDom('#pins1', domString);
    })
    .catch((err) => console.error('get pins broke :(', err));
};

const displaySingleBoard = (boardId) => new Promise

export default { printPins };
