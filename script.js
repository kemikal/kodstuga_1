console.log("Hej från javascript!");

// VARIABLER

var x = 10;

let y = 10;

let summa = x + y;

summa += 10;

console.log("x är ", typeof x);
console.log("y är ", typeof y);
 
console.log("summa:", summa);

// let fName = prompt("Vad heter du i förnamn?");
// let lName = prompt("Vad heter du i efternamn då???");

// let userName = "Du heter "+fName+" "+lName+"!";

// alert(userName);
//console.log(userName);

// let textToPrint = document.getElementById("textBox");

//textToPrint.insertAdjacentHTML("beforeend", "<p class='para'>" + userName + "</p>")

let animals = ["Hund", "Katt", "Åsna", "Tupp"];

let scores = [1,4,6,98,45];

console.log(animals.length);

// console.log(animals[0]);

// for (let i=0; i < animals.length; i++) {
//     console.log("Nu är vi på itteration: " + i + " och där finns en " + animals[i]);
// }

let newAnimal = "Myra";

animals.push(newAnimal);

for (let animal in animals) {
    console.log(animals[animal]);
}

let persons = [
    {id: 785732934, fName: "Janne", lName: "Kemi", age: 40},
    {id: 89534032, fName: "Kalle", lName: "Larsson"},
    {fName: "Anna", lName: "Hopp", adress: 
        {gata: "Djursholm", stad: "Borlänge"}
    }
];

console.log(persons[2].fNAme);

let xyz = 11;

if (xyz == 10) {
    console.log("It is True");
} else {
    console.log("Nehe du!");
}

// KNAPPEN
const myBtn = document.getElementById("myBtn");
const scoreDisplay = document.getElementById("scoreDisplay");

let score = 0;
let playerName = "Janne";

myBtn.addEventListener("click", function(){
    
    

    // ÖKA SCRORE MED 1
    score++;
    console.log("score: ", score);

    let scoreCard = "<div class='scoreCard'><div><strong>Player Name</strong><br>" + playerName + "</div><div><strong>Player Score: </strong><br>" + score +"</div></div>";

    console.log(scoreDisplay);
    // scoreDisplay.innerHTML = score;

    // TÖM P INNAN VI SKICKAR NYTT VÄRDE
    //scoreDisplay.innerHTML = "";

    // SKICKA NYTT VÄRDE
    scoreDisplay.insertAdjacentHTML("afterbegin", "<hr>" + scoreCard);
    
});














