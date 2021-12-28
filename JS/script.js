const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const progressFinish = document.getElementById("progress-finish");
const colorBar = document.querySelector("#color-bar");
const pc2d = document.querySelector("#pc2d-img");
const steps = document.querySelectorAll(".step");

let active = 1;
const colorBarStepLength = 100 / steps.length;
const defaultBarLength = colorBarStepLength / 2;

colorBar.style.width = `${defaultBarLength}%`;

const changeForvardScaling = (index) => {
  if (index - 1 >= 0) {
    steps[index - 1].classList.remove("scaled");
  }

  steps[index].classList.add("scaled");
};

const changeBackvardScaling = (index) => {
  if (index - 1 >= 0) {
    steps[index - 1].classList.add("scaled");
  }

  steps[index].classList.remove("scaled");
};

const changeColorBarWidth = (idxOfActiveStep) => {
  const newLength = defaultBarLength + colorBarStepLength * idxOfActiveStep;

  if (idxOfActiveStep === steps.length - 1) {
    colorBar.style.width = `100%`;

    return;
  }

  colorBar.style.width = `${newLength}%`;
};

progressNext.addEventListener("click", () => {
  changeForvardScaling(active);
  changeColorBarWidth(active);

  active++;

  if (active > steps.length) {
    active = steps.length;
  }

  updateProgress();
});

progressPrev.addEventListener("click", () => {
  active--;

  changeBackvardScaling(active);
  changeColorBarWidth(active - 1);

  if (active < 1) {
    active = 1;
  }

  updateProgress();
});

progressFinish.addEventListener("click", () => {
  let all
  for (let chosenKey in chosen) {
    if (chosen[chosenKey] == null) {
      all = false
      break
    }
  }
  all ? window.location.href = "../../HTML/order_form.html" : snackBar()
});

function changePicture(active) {
  if (active === steps.length) {
    pc2d.src = "../IMG/2d/PC-block.png";
  } else {
    const value = progressValues[active - 1].toLowerCase().replace(" ", "");

    pc2d.src = `../IMG/2d/block_with_${value}.png`;
  }
}

const updateProgress = () => {
  fillTable(progressValues[active - 1]);
  changePicture(active);

  document.getElementById("tbody").remove();

  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
      // step.classList.add("scaled");
    } else {
      step.classList.remove("active");
      // step.classList.remove("scaled");
    }
  });
  progressBar.style.width = (active - 1) / (steps.length - 1);
  if (active === 1) {
    progressPrev.disabled = true;
  } else if (active === steps.length) {
    progressNext.disabled = true;
  } else {
    progressPrev.disabled = false;
    progressNext.disabled = false;
  }
};

let progressValues = [
  "Video card", "Processor", "Motherboard", "Memory", "SSD", "HDD", "Power", "Case"];


function snackBar() {
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2000);
}
