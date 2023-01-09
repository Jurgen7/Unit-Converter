let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

let btn = document.getElementById("btn")


btn.addEventListener("click", function () {
    let inputVal = parseFloat(document.getElementById("input-val").value)

    let feet = (inputVal * 3.281).toFixed(3)
    let meter = (inputVal / 3.281).toFixed(3)

    let liter = (inputVal / 0.264).toFixed(3)
    let gallon = (inputVal * 0.264).toFixed(3)

    let kilogram = (inputVal / 2.204).toFixed(3)
    let pound = (inputVal * 2.204).toFixed(3)

    length.innerHTML = `${inputVal} meters = ${feet} feet | ${inputVal} feet = ${meter} meters`

    volume.innerHTML = `${inputVal} liters = ${gallon} gallons | ${inputVal} gallons = ${liter} liters`

    mass.innerHTML = `${inputVal} kilos = ${pound} pounds | ${inputVal} pounds = ${kilogram} kilos`

})