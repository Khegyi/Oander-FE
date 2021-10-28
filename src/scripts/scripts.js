import * as cards from "../../data/data.json";

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

$("#scroll-top").on("click", (e) => {
  e.preventDefault();
  $(document).scrollTop(0);
});

const getCards = () => {
  $.when($.getJSON("data/data.json"), $.ready)
    .done(function (data) {
      data[0].forEach((card, index) => {
        const cardTemplate = `<div class="col-sm-12 card p-0">
            <img src="${card.image}" class="card-img-top" alt="watch ${index}">
            <div class="card-content">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                </div>
                <div class="card-footer">
                    <a class="nav-link" href="#">Read more 
                    <img src="assets/icons/arrow.svg" class="arrow_icon" alt="arrow icon">
                    </a>
                </div>
            </div>
        </div>`;
        $(".row.card-group").append(cardTemplate);
      });
    })
    .fail(function (jqXHR, textStatus) {
      cards.forEach((card, index) => {
        const cardTemplate = `<div class="col-sm-12 card p-0">
            <img src="${card.image}" class="card-img-top" alt="watch ${index}">
            <div class="card-content">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                </div>
                <div class="card-footer">
                    <a class="nav-link" href="#">Read more 
                    <img src="assets/icons/arrow.svg" class="arrow_icon" alt="arrow icon">
                    </a>
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
