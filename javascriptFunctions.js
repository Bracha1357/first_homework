  // This is a function to convert celcius to farenheit- Plug in any number and it will work!!!
function celciusToFarenheit (celcius) {
    return (celcius * 9/5) + 32;
}

let celciusTemp = 30
let farenheitTemp = celciusToFarenheit(celciusTemp);

console.log (celciusTemp + "°C is equal to " + farenheitTemp + "°F")


// This is a function to convert farenheit to celcius- Plug in any number and it will work!!!
function farenheitToCelcius (farenheit) {
    return (farenheit - 32) * 5/9
}

let farenheitTemp2 = 77
let celciusTemp2 = farenheitToCelcius(farenheitTemp2);

console.log (farenheitTemp2 + "°F is equal to " + celciusTemp2 + "°C")



