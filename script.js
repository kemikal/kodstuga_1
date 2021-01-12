console.log("Hej från javascript!");

// VARIABLER

var x = 10;

let y = 10;

let summa = x + y;

summa += 10;

console.log("x är ", typeof x);
console.log("y är ", typeof y);

console.log("summa:", summa);

let fName = prompt("Vad heter du i förnamn?");
let lName = prompt("Vad heter du i efternamn då???");

let userName = "Du heter "+fName+" "+lName+"!";

// alert(userName);
console.log(userName);

let textToPrint = document.getElementById("textBox");

textToPrint.insertAdjacentHTML("beforeend", "<p class='para'>" + userName + "</p>")

