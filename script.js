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

// for (let animal in animals) {
//     console.log(animals[animal]);
// }




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

// BONDALIZER

// SKAPA MIN OBJECT ARRAY
let persons = [
    {fName: "Janne", lName: "Kemi"},
    {fName: "Kalle", lName: "Larsson"},
    {fName: "Lars", lName: "Larsson"},
    {fName: "Gurra", lName: "Larsson"}
    
];

// LÅT BESÖKAREN SKRIVA ETT NAMN SOM VI SKA SÖKA PÅ
let searchPerson = prompt("Skriv ett förnamn");

// EN VARIABEL SOM HÅLLER KOLL PÅ OM VI HITTAT NÅGON
// ÄR FALSE FRÅN BÖRJAN OCH ÄNDRAS TILL TRUE VID TRÄFF
var found = false;

// LOOPA IGENOM HELA LISTAN
for (person in persons) {   
    
    // KOLLA OM DET ÄR PERSONEN VI SÖKER EFTER
    // ÄNDRA SÖKNING OCH RESULTAT TILL SMÅ BOKSTÄVER SÅ ATT SÖKNING INTE ÄR CASE SENSITIVE
    if (searchPerson.toLowerCase() == persons[person].fName.toLowerCase()) {
        console.log("Hittade: ", persons[person].lName + ", " + persons[person].fName + " " + persons[person].lName);
        // ÄNDRA HITTAT TILL TRUE FÖR ATT VISA ATT VI HITTAT
        found = true;
    } 
}

// KOLLA OM VI HITTAT NÅGON, OM FORTFARANDE FALSE, SKRIV HITTADE EJ
if (found == false) {
    console.log("Hittade ingen med det namnet!");
}












