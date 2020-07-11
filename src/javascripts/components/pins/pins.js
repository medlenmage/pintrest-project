const pinMaker = (meme) => {
  console.warn(meme);
  const domString = `
    <div class="col-3">
      <div class="card border-0 rounded-0 bg-dark text-light" id=${meme.id}>
        <img src="${meme.imgUrl}">
        <div class="card-header text-center"><h5>${meme.name}</h5></div>
        <p>${meme.description}</p>
      </div>
    </div>
  `;
  return domString;
};

export default { pinMaker };
