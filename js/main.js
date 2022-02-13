const collapsibles = document.querySelectorAll(".collapse");
const menu = document.querySelectorAll(".navBar");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapse--expanded");
  })
);

menu.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("list--expanded");
  })
);
