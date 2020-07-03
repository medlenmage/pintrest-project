const pinMaker = (pin) => {
  const domString = `
    <div class="col-3">
      <div class="card border-0 rounded-0 bg-dark text-light" id=${pin.id}>
        <img src="${pin.imgUrl}">
        <div class="card-header text-center"><h5>${pin.name}</h5></div>
        <p>${pin.description}</p>
      </div>
    </div>
  `;
  return domString;
};

export default { pinMaker };
