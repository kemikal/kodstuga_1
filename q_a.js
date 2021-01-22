// "use strict";

let userName = "Janne";

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(){
    console.log("Klick på mig"); // här loggar jag itll konsonsoslen
});

let zoo = ["Katt", "Hund", "Tupp", "Åsna"];

zoo.push("Ödla");

// zoo.push(prompt("Ge mig ett nytt djur"))


let animals = document.createElement("ul");
animals.id = "zoo";
animals.classList.add("zooList");

animals.addEventListener("click", function(e){
    console.log(e.target.className);
    let mittKlickadeDjur = e.target.id;
    console.log(mittKlickadeDjur);

    console.log("loggar ut array i klick", zoo);

    if(e.target.className == "inc") {
        console.log("Vi köper en till " + mittKlickadeDjur );
    }

});

animals.innerHTML = "";
for (let animal in zoo) {
    animals.insertAdjacentHTML("afterbegin", "<li class='zooItem'>" + zoo[animal] + "<button class='inc' id='"+ zoo[animal] +"'>+</button><button class='dec'>-</button><input type='checkbox'></li>")
    //animals.innerHTML = ("<li class='zooItem'>" + zoo[animal] + "<button class='inc' id='"+ zoo[animal] +"'>+</button><button class='dec'>-</button><input type='checkbox'></li>");
}

const zoo2 = ["Katt1", "Hund", "Tupp", "Åsna"];

zoo2.forEach(e => console.log(e));

document.body.appendChild(animals)
//document.body.insertAdjacentElement("beforeend", animals)

// let myTemplate = "Här är är en <span class='"+myVar+"'>HEJ</span>  vi vill lägga till en variabel " + userName + " här fortsätter strängen!";
let myTemplate2 = `Här är är en sträng vi vill lägga till en variabel  här fortsätter strängen!`;

document.body.insertAdjacentHTML("beforeend", myTemplate2);