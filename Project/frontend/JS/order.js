const chosen = JSON.parse(sessionStorage.getItem('chosen'))
console.log(chosen)
let s = "";
let sum = 0.0;

for (let [key, value] of Object.entries(chosen)) {
    s += `<p>${key} (${value['value']}): \u20ac ${value['price']}</p>`
    sum += parseFloat(value['price'])
}
s += `<p>Total: ${sum}</p>`

document.getElementById("components").innerHTML += s;
