const chosens = JSON.parse(sessionStorage.getItem('chosen'))
console.log(chosens)

for (let [value] of Object.entries(monitor)) {
if (key[value] = 'Lian Li PC-O11 Dynamic') {
  m = `<img class="order-container" src="../IMG/Computer1.png">`  }
  else if (value = 'Corsair iCUE 4000X'){
  m = `<img class="order-container" src="../IMG/Computer1.png">` }
  else if (value = 'Corsair 4000D Airflow') {
  m = `<img class="order-container" src="../IMG/Computer1.png">`}
  else if (value = 'NZXT H510 ATX') {
  m = `<img class="order-container" src="../IMG/Computer1.png">`}
  else if (value = 'Phanteks Eclipse P300') {
  m = `<img class="order-container" src="../IMG/Computer1.png">`}
  else if (value = 'Lian Li O11 Dynamic Mini Snow Edition') {
  m = `<img class="order-container" src="../IMG/Computer1.png">`}
  else if (value = 'Cooler Master MasterBox Q300L') {
  m = `<img class="order-container" src="../IMG/Computer1.png">`}

}

document.getElementById("components").innerHTML += m;
