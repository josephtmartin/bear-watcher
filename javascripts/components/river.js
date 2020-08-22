const cardBuilder = (arr) => {
    $('#bearCards').html('');
    arr.forEach((bear, index) => {
        $('#bearCards').append(
            `<div class="card m-3 bear--card" style="width: 25%;">
            <img class="card-img-top" src="${bear.image}" alt="${bear.name}">
            <div class="card-body">
              <h5 class="card-title">${bear.name}</h5>
              <div class="d-flex justify-content-around">
                <button type="button" id="attempt-${index}" class="btn btn-lg">Tried To Catch</button>
                <button type="button" id="catch-${index}" class="btn btn-lg">Caught</button>
              </div>
              <div id="attemptsAndCatches-${index}"></div>
            </div>
          </div>`
        )
    })
    catchButtonEvents(arr);
}

const attemptButtonClick = (arr) => {
    arr.forEach((bear, index) => {
        $(`#attempt-${index}`).click(() => {
            let attempts = {};
            attempts.time = new Date();
            attempts.type = 'Attempt';
            $(`#attemptsAndCatches-${index}`).append(
                `<div class="${attempts.type} m-2">
                    <div>${attempts.type}: ${attempts.time}</div>
                </div>`
            )
        })
    })
}

const catchButtonClick = (arr) => {
    arr.forEach((bear, index) => {
        $(`#catch-${index}`).click(() => {
            let catchesInfo = {};
            catchesInfo.time = new Date();
            catchesInfo.type = 'Catch';
            catchesInfo.bearNumber = index;

            $(`#attemptsAndCatches-${index}`).append(
                `<div class="${catchesInfo.type} m-2">
                    <div>${catchesInfo.type}: ${catchesInfo.time}</div>
                </div>`
            )
        })
    })
}

const catchButtonEvents = (arr) => {
    attemptButtonClick(arr);
    catchButtonClick(arr);
}

export { cardBuilder }