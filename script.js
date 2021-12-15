const btnDropdown = document.querySelector(".js-appear-dropdown");
btnDropdown.addEventListener("click", showDropdown);
function showDropdown() {
  var x = document.getElementById("js-dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


const buyTickets = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showBuyTickets() {
  modal.classList.add("open");
}

function closeBuyTickets() {
  modal.classList.remove("open");
}

for (buyTicket of buyTickets) {
  buyTicket.addEventListener("click", showBuyTickets);
}

modalClose.addEventListener("click", closeBuyTickets);
modal.addEventListener("click", closeBuyTickets);
modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
