var btnPrev = document.querySelector(".my .btn-prev");
var btnNext = document.querySelector(".my .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".my .item__movie");
  document.querySelector(".my .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".my .item__movie");
  document.querySelector(".my .list-item").prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".continue__watch .btn-prev");
var btnNext = document.querySelector(".continue__watch .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".continue__watch .item__movie");
  document.querySelector(".continue__watch .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".continue__watch .item__movie");
  document
    .querySelector(".continue__watch .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".trending__movie .btn-prev");
var btnNext = document.querySelector(".trending__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".trending__movie .item__movie");
  document.querySelector(".trending__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".trending__movie .item__movie");
  document
    .querySelector(".trending__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".new__movie .btn-prev");
var btnNext = document.querySelector(".new__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".new__movie .item__movie");
  document.querySelector(".new__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".new__movie .item__movie");
  document
    .querySelector(".new__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".type__movie .btn-prev");
var btnNext = document.querySelector(".type__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".type__movie .item__movie");
  document.querySelector(".type__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".type__movie .item__movie");
  document
    .querySelector(".type__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".hero__movie .btn-prev");
var btnNext = document.querySelector(".hero__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".hero__movie .item__movie");
  document.querySelector(".hero__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".hero__movie .item__movie");
  document
    .querySelector(".hero__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".love__movie .btn-prev");
var btnNext = document.querySelector(".love__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".love__movie .item__movie");
  document.querySelector(".love__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".love__movie .item__movie");
  document
    .querySelector(".love__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".anime__movie .btn-prev");
var btnNext = document.querySelector(".anime__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".anime__movie .item__movie");
  document.querySelector(".anime__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".anime__movie .item__movie");
  document
    .querySelector(".anime__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".actor__movie .btn-prev");
var btnNext = document.querySelector(".actor__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".actor__movie .item__movie");
  document.querySelector(".actor__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".actor__movie .item__movie");
  document
    .querySelector(".actor__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".watched__movie .btn-prev");
var btnNext = document.querySelector(".watched__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".watched__movie .item__movie");
  document.querySelector(".watched__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".watched__movie .item__movie");
  document
    .querySelector(".watched__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".viet__movie .btn-prev");
var btnNext = document.querySelector(".viet__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".viet__movie .item__movie");
  document.querySelector(".viet__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".viet__movie .item__movie");
  document
    .querySelector(".viet__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".korea__movie .btn-prev");
var btnNext = document.querySelector(".korea__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".korea__movie .item__movie");
  document.querySelector(".korea__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".korea__movie .item__movie");
  document
    .querySelector(".korea__movie .list-item")
    .prepend(list[list.length - 1]);
});

const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// hover user

btnUser = document.querySelector(".nav__user");

btnUser.addEventListener("mouseenter", function () {
  document.querySelector(".nav__user>span").classList.remove("hidden");
  document.querySelector(".man__acc").classList.remove("hidden");
});

btnUser.addEventListener("mouseleave", function () {
  document.querySelector(".nav__user>span").classList.add("hidden");
  document.querySelector(".man__acc").classList.add("hidden");
});

listItems = document.querySelectorAll(".nav__left-list li a");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    if (listItems[i].classList.length == 0) {
      listItems[i].classList.add("nav__list-enter");
      for (let j = 0; j < listItems.length; j++) {
        if (j != i) {
          listItems[j].classList.remove("nav__list-enter");
        }
      }
    }
  });
}