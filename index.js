/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertMeter = 3.281
const convertLiter = 0.264
const convertKilogram = 2.204

let lengthEl = document.getElementById("converted-length")
let literEl = document.getElementById("converted-liters")
let kilogramEl = document.getElementById("converted-mass")
let convertBtn = document.getElementById("convert-btn")
let unit = document.getElementById("unit-input")

convertBtn.addEventListener("click", function(){
    convert(unit.value)
})

function convert (unit){
    lengthEl.textContent = `${unit} meters = ${(unit * convertMeter).toFixed(3)} feet  
    | ${unit} feet = ${(unit / convertMeter).toFixed(3)} meters`

    literEl.textContent = `${unit} liters = ${(unit * convertLiter).toFixed(3)} gallons  
    | ${unit} gallons = ${(unit / convertLiter).toFixed(3)} liters`

    kilogramEl.textContent = `${unit} kilos = ${(unit * convertKilogram).toFixed(3)} pounds  
    | ${unit} pounds = ${(unit / convertKilogram).toFixed(3)} kilos`
}