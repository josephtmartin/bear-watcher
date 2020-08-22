const cardBuilder = (array) => {
  $('#bearCard').html('');
  array.forEach((bear) => {
    $('#bearCard').append(`
      <div class="card" style="width: 18rem;">
        <img src="${bear.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4>${bear.name}</h4>
            </div>
      </div>
      `);
  });
};

export { cardBuilder };
