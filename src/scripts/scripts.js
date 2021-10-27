$("#subscribe_btn").on("click", (e) => {
  e.preventDefault();
  const firstName = $("#first_name").val();
  const lastName = $("#last_name").val();
  const email = $("#email").val();
  if (firstName !== "" && lastName !== "" && email !== "") {
    $(".error-message").text("").hide();
  } else {
    $(".error-message").text("All field must be filled out!").show();
  }
});

const getCards = () => {
  $.when($.getJSON("data/data.json"), $.ready).done(function (data) {
    data[0].forEach((card, index) => {
      const cardTemplate = `<div class="col-sm-12 card p-0">
            <img src="${card.image}" class="card-img-top" alt="watch ${index}">
            <div class="card-content">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                </div>
                <div class="card-footer">
                    <a class="nav-link" href="#">Read more <object type="image/svg+xml"
                            data="img/icons/arrow.svg" class="arrow_icon"></object></a>
                </div>
            </div>
        </div>`;
      $(".row.card-group").append(cardTemplate);
    });
  });
};

$(document).ready(function () {
  getCards();
});
