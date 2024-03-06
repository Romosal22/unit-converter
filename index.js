/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function(){
    
    let input = inputEl.value
    if (!input) {
        input=1
    }
    lengthResult.innerText = `
    ${input} meters = ${(input*3.281).toFixed(3)} feet | ${input} feet = ${(input*(1/3.281)).toFixed(3)} meters
    `
    volumeResult.innerText = `
    ${input} liters = ${(input*0.248).toFixed(3)} gallons | ${input} gallons = ${(input*(1/0.248)).toFixed(3)} liters
    `
    
    massResult.innerText = `
    ${input} kilograms = ${(input*2.264).toFixed(3)} pounds | ${input} pounds = ${(input*(1/2.264)).toFixed(3)} kilograms
    `
})

convertBtn.click()
