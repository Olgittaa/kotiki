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
  document.getElementById("myInput").value = "";
  fillTable(progressValues[active - 1]);
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

var dialog = document.getElementById('dialog');
document.getElementById('hide').onclick = function () {
  dialog.close();
}

function componentInfo(component) {
  let desc = document.getElementById('description')
  if (component === 'Video Card') {
    desc.innerText = 'A graphics card is a type of display adapter or video card installed within most computing devices to display graphical data with high clarity, color, definition and overall appearance. A graphics card provides high-quality visual display by processing and executing graphical data using advanced graphical techniques, features and functions.\n' +
        '\n' +
        'A graphics card is also known as a graphics adapter, graphics controller, graphics accelerator card or graphics board.\n';
  } else if (component === 'Processor') {
    desc.innerText = 'A processor is an integrated electronic circuit that performs the calculations that run a computer. A processor performs arithmetical, logical, input/output (I/O) and other basic instructions that are passed from an operating system (OS). Most other processes are dependent on the operations of a processor.\n' +
        '\n' +
        'The terms processor, central processing unit (CPU) and microprocessor are commonly linked as synonyms. Most people use the word “processor” interchangeably with the term “CPU” nowadays, it is technically not correct since the CPU is just one of the processors inside a personal computer (PC).';
  } else if (component === 'Motherboard') {
    desc.innerText = 'A motherboard is a computer’s main circuit board, and it includes the following attached to a fixed planar surface:\n' +
        'Input/output ports\n' +
        'Peripheral connections\n' +
        'PCI expansion slots\n' +
        'Bus and power connectors\n' +
        'Heat sinks and mounting points for fans and major components, including the central processing unit (CPU) and optional coprocessors\n' +
        'Supporting chipset for CPU, bus and external components\n' +
        'BIOS\n' +
        'Memory sockets for RAM, ROM and cache\n' +
        'Interconnecting circuitry\n' +
        'Additionally, daughterboards and mezzanine cards, installed on a second level, may be plugged into the motherboard. A daughterboard may be the actual motherboard and/or card or board plugged into the motherboard.\n' +
        '\n' +
        'The motherboard is also referred to as the main board (mobo), system board or planar board. Apple computers refer to the motherboard as the logic board.'
  } else if (component === 'Memory') {
    desc.innerText = 'Random access memory (RAM) is a type of data storage used in computers that is generally located on the motherboard. It is the main memory used by a computer for quick access since is much faster to read and write than other forms of storage—between 20-100 times faster than hard disks.\n' +
        '\n' +
        'RAM is a short-term access memory used to rapidly perform immediate tasks, but it is inherently limited. Every time the computer needs to work on an application or program, the RAM is used to complete that operation. However, since it’s volatile, no data can be stored on RAM permanently, so a long-term storage such as a hard drive is required.\n' +
        '\n' +
        'A RAM chip may be individually mounted on the motherboard or in sets of several chips on a small board connected to the motherboard.\n' +
        '\n' +
        'The three main memory circuit boards types containing chips are:\n' +
        '\n' +
        'RIMMs (Rambus in-line memory modules).\n' +
        'SIMMs (single in-line memory modules).\n' +
        'DIMMs (dual in-line memory modules).\n' +
        'Most motherboards today use DIMMs.\n';
  } else if (component === 'SSD') {
    desc.innerText = 'A solid state drive (SSD) is an electronic storage drive built on solid state architecture. SSDs are built with NAND and NOR flash memory to store non-volatile data and dynamic random access memory (DRAM). A SSD and magnetic hard disk drive (HDD) share a similar purpose.\n' +
        '\n' +
        'A SSD is also known as a solid state disk (SSD) or electronic disk drive.\n';
  } else if (component === 'HDD') {
    desc.innerText = 'A hard disk drive (HDD) is a non-volatile computer storage device containing magnetic disks or platters rotating at high speeds. It is a secondary storage device used to store data permanently, random access memory (RAM) being the primary memory device. Non-volatile means data is retained when the computer is turned off.\n' +
        '\n' +
        'A hard disk drive is also known as a hard drive.\n';
  } else if (component === 'Power') {
    desc.innerText = 'A power supply is a component that supplies power to at least one electric load. Typically, it converts one type of electrical power to another, but it may also convert a a different form of energy – such as solar, mechanical, or chemical - into electrical energy.\n' +
        '\n' +
        'A power supply provides components with electric power. The term usually pertains to devices integrated within the component being powered. For example, computer power supplies convert AC current to DC current and are generally located at the rear of the computer case, along with at least one fan.\n' +
        '\n' +
        'A power supply is also known as a power supply unit, power brick or power adapter.\n';
  } else if (component === 'Sound Card') {
    desc.innerText = 'A sound card is an expansion component used in computers to receive and send audio. Sound cards are configured and utilized with the help of a software application and a device driver. The input device attached to receive audio data is usually a microphone, while the device used to output audio data is generally speakers or headphones.\n' +
        '\n' +
        'The sound card converts incoming digital audio data into analog audio so that the speakers can play it. In the reverse case, the sound card can convert analog audio data from the microphone into digital data that can be stored on the computer and altered using audio software.\n' +
        '\n' +
        'Sound cards are also known as audio adapters.\n';
  } else if (component === 'Wired Network Adapter' || component === 'Wireless Network Adapter') {
    desc.innerText = 'A network adapter is the component of a computer’s internal hardware that is used for communicating over a network with another computer. It enables a computer to connect with another computer, server or any networking device over an local area network (LAN) connection. A network adapter can be used over a wired or wireless network.\n' +
        '\n' +
        'A network adapter is usually the only component within a computer for interfacing or connecting with a network. Typically, it is built on a printed circuit board with jumpers that connect it with the computer’s motherboard.\n' +
        '\n' +
        'A network adapter for wired networks has an RJ-45 port that uses twisted or untwisted pair cable for network connectivity. Wireless adapters connect with the network through a built-in or externally connected antenna. Both network adapters support popular LAN protocols, including TCP/IP.\n';
  }
  dialog.show();

}
