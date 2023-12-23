const btn = document.getElementById("btn");
const bar = document.getElementById("bars");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  bar.classList.toggle("active");
  close.classList.toggle("active");
});
