
testEmail("j@k.se");

function testEmail(email) {
    let mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(mailFormat)) {
        console.log("Jajjamen det är bra!");
    } else {
        console.log("Nope, de ser inte bra ut!");
    }
}

// let orgText = prompt("Ge mig en text");

// let okText = orgText.replace(/[aeiouyåäö]/g, 'detta kan ju vara hur långt som helst oxå');

// alert(okText);

let userName = "Janne";

let printUserMessage = (!userName) ? "Hey stranger" : "Hej på dig " + userName ;

console.log(printUserMessage);

window.addEventListener("keyup", function(evt){
    console.log("key", evt.key);

    if (evt.key == "a") {
        console.log("Vi har fångat a");

       document.getElementById("a").classList.add("boxAlt");

        setTimeout(function() {
            document.getElementById("a").classList.remove("boxAlt");
        }, 400);
    }

    if (evt.key == "s") {
        console.log("Vi har fångat s");

        document.getElementById("s").classList.toggle("boxAlt");

        setTimeout(function() {
            document.getElementById("s").classList.toggle("boxAlt");
        }, 1000);
    }

})

Promise.all([
    fetch("teams.json").then(response => response.json()),
    //fetch("finnsinte.json").then(response => response.json()),
    fetch("felformat.json").then(response => response.json()),
    fetch("heroes.json").then(response => response.json())
])
.then(data => {
   console.log("data", data);
    let teams = data[1];

    console.log("teams", teams[1].heroName);
    utanforScope(teams, heroes);
})
.catch(error => console.log("Error", error));

function utanforScope(teams, heroes) {

    
    console.log("teams utanför then ", data);

}

// FUNKAR KANSKE INTE!
fetch("teams.json").then(response => response.json()).then(data => printTeams(data));

function printTeams(teams) {
    
 for (team in teams) {

    fetch("heroes.json").then(response => response.json()).then(heroes => {
        for (hero in heroes) {
            //loopa heros. leta med .find kanske?
        }
    });


 }

}