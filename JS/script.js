const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const progressFinish = document.getElementById("progress-finish");
const colorBar = document.querySelector("#color-bar");
const steps = document.querySelectorAll(".step");

let active = 1;
const colorBarStepLength = 100 / steps.length;
const defaultBarLength = colorBarStepLength / 2;

colorBar.style.width = `${defaultBarLength}%`;

const changeForwardScaling = (index) => {
  if (index - 1 >= 0) {
    steps[index - 1].classList.remove("scaled");
  }

  steps[index].classList.add("scaled");
};

const changeBackwardScaling = (index) => {
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
  changeForwardScaling(active);
  changeColorBarWidth(active);

  active++;

  if (active > steps.length) {
    active = steps.length;
  }

  updateProgress();
});

progressPrev.addEventListener("click", () => {
  active--;

  changeBackwardScaling(active);
  changeColorBarWidth(active - 1);

  if (active < 1) {
    active = 1;
  }

  updateProgress();
});

progressFinish.addEventListener("click", () => {
  let all = true;
  for (let chosenKey in chosen) {
    if (chosen[chosenKey] == null) {
      all = false;
      break;
    }
  }
  all ? (window.location.href = "../PHP/order_form.php") : snackBar();
});

const updateProgress = () => {
  fillTable(progressValues[active - 1]);
  // changePicture(active);
  nextPicture(progressValues[active - 1]);

  document.getElementById("tbody").remove();
  document.getElementById("dropdownbtn").innerText = "Sort by:";

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
  "Video card",
  "Processor",
  "Motherboard",
  "Memory",
  "SSD",
  "HDD",
  "Power",
  "Other",
];

function snackBar() {
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2000);
}

function nextPicture(name) {
  for (let i = 0; i < progressValues.length - 1; i++) {
    let value = progressValues[i];
    if (value === name) {
      document.getElementById(name.replace(" ", "-").toLowerCase()).style =
        "display:block;animation: pulse 0.8s infinite;";
      document.getElementById(
        name.replace(" ", "-").toLowerCase()
      ).src = `../IMG/2d/current/${name}.png`;
    } else if (chosen[value] === null) {
      document.getElementById(value.replace(" ", "-").toLowerCase()).style =
        "display:none;";
    } else {
      document.getElementById(value.replace(" ", "-").toLowerCase()).style =
        "display:block";
      document.getElementById(
        value.replace(" ", "-").toLowerCase()
      ).src = `../IMG/2d/selected/${value}.png`;
    }
  }
}
