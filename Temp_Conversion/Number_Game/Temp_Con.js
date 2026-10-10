// Temperature Conversion Program

const textBox = document.getElementById("textBox");
const toFarh = document.getElementById("toFarh");
const toCels = document.getElementById("toCels");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFarh.checked){
        temp = Number(textBox.value);
        temp = ((temp * 9) / 5) + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(toCels.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Select an option !!";
    }
}