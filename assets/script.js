/* start taking items from html file*/
const slider = document.querySelector(".slider");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const parents = document.querySelector(".arrows ul");
/* end taking items from html file*/

var index = 0;   

document.querySelectorAll(".arrows ul li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    index = ind;
    indicator.classList.add("selected");
    document.querySelector(".arrows .selected").classList.remove("selected");
    slider.style.transform = "translate(" + ind * -25 + "%)";
  });
});

left.addEventListener("click", function () {
  index = index > 0 ? index - 1 : 0;
  document.querySelector(".arrows .selected").classList.remove("selected");
  parents.children[index].classList.add("selected");
  slider.style.transform = "translate(" + index * -25 + "%)";
});

right.addEventListener("click", function () {
  index = index < 3 ? index + 1 : 3;
  document.querySelector(".arrows .selected").classList.remove("selected");
  parents.children[index].classList.add("selected");
  slider.style.transform = "translate(" + index * -25 + "%)";
});