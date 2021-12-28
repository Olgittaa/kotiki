const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const progressFinish = document.getElementById("progress-finish");
const steps = document.querySelectorAll(".step");
let active = 1;

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

progressPrev.addEventListener("click", () => {
  active--;
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
  if (active >= 8) {
    document.getElementById("pc2d-img").src = "../IMG/2d/PC-block.png"
  } else {
    document.getElementById("pc2d-img").src = "../IMG/2d/block_with_" +
        progressValues[active - 1].toLowerCase().replace(' ', '') + ".png"
  }
}

const updateProgress = () => {
  fillTable(progressValues[active - 1]);
  changePicture(active);

  document.getElementById("tbody").remove();

  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  progressBar.style.width = ((active - 1) / (steps.length - 1));
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
  "Video card", "Processor", "Motherboard", "Memory", "SSD", "HDD", "Power", "Case"]


function snackBar() {
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2000);
}
