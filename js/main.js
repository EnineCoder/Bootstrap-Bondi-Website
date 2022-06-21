let lis = document.querySelectorAll(".work ul li");
let divs = document.querySelectorAll(".work .row .all");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    e.target.classList.add("rounded-pill");
  });
  li.addEventListener("click", rmAll);
});

function rmAll() {
  divs.forEach((div) => {
    div.style.display = "none";
    document.querySelectorAll(this.dataset.show).forEach((div) => {
      div.style.display = "block";
    });
  });
}

// Search Input

let searchBtn = document.querySelector(".search i");
let searchInput = document.querySelector(".search-btn");

searchBtn.addEventListener("click", (e) => {
  searchInput.classList.toggle("block");
});
