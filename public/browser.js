console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li
    class="list-group-item list-group-item-info d-flex align-itmes-center justify-content-between"
    style="font-size: 20px; color: rgb(8, 62, 7); font-weight: 700" >
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-dark" >
        Ozgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-secondary btn-danger"
        style="margin-left: 15px" >
        Ochirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan unirib ko'ring!");
    });
});
