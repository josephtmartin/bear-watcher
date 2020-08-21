const addBearForm = () => {
  $('#bearForm').html (`
    <form>
        <div class="form-group">
            <label for="bear-image">Image URL:</label>
            <input type="url" class="form-control" id="bear-image" placeholder="Enter Image URL">
        </div>
        <div class="form-group">
            <label for="bear-name">Bear Name:</label>
            <input type="text" class="form-control" id="bear-name" placeholder="Ex:Yogi">
        </div>
        <button type="button" class="btn btn-primary btn-lg">Large button</button>
    </form>
    `);
};

export { addBearForm }