const slider = document.querySelector("#slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let counter = 1;
let size = slider.clientWidth;
slider.style.transform = `translateX(${-size * counter}px)`;

function changeDotStyle(idx, dots) {
  for (let i = 0; i < dots.length; i++) {
    if (i === idx) {
      dots[i].className += " active";
    } else if (dots[i].className !== "dot") {
      dots[i].className = "dot";
    }
  }
}

changeDotStyle(0, dots);

window.addEventListener("resize", () => {
  counter = 1;
  size = slider.clientWidth;
  slider.style.transform = `translateX(${-size * counter}px)`;
  changeDotStyle(counter - 1, dots);
});

next.addEventListener("click", () => {
  if (counter >= slides.length - 1) return;
  slider.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
  changeDotStyle(counter - 1, dots);
});

prev.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  slider.style.transform = `translateX(${-size * counter}px)`;
  changeDotStyle(counter - 1, dots);
});

slider.addEventListener("transitionend", () => {
  if (slides[counter].id === "lastClone") {
    slider.style.transition = "none";
    counter = slides.length - 2;
    slider.style.transform = `translateX(${-size * counter}px)`;
    changeDotStyle(counter - 1, dots);
  }
  if (slides[counter].id === "firstClone") {
    slider.style.transition = "none";
    counter = slides.length - counter;
    changeDotStyle(counter - 1, dots);
    slider.style.transform = `translateX(${-size * counter}px)`;
  }
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    counter = i + 1;
    slider.style.transition = `transform 0.4s ease-in-out`;
    slider.style.transform = `translateX(${-size * counter}px)`;
    changeDotStyle(i, dots);
  });
}
