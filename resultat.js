let players = [{
    "playerName": "Janne",
    "score": 0
},{
    "playerName": "Kalle",
    "score": 0
},
]

function printPlayers() {
    document.getElementById("resultBox").innerHTML = "";
    for (let player in players) {
        document.getElementById("resultBox").insertAdjacentHTML("beforeend", "<div id='"+ player +"'>" + players[player].playerName + "[Score: " + players[player].score + "] <button class='inc'>+</button><button class='dec'>-</button></div>");
    }
}

printPlayers();

document.getElementById("resultBox").addEventListener("click", function(evt) {
    console.log(evt.target.className);

    let doPlayer = evt.target.parentNode.id;
    let doScore = evt.target.classList.value;

    if(doScore == "inc") {
        players[doPlayer].score ++
    } else {
        players[doPlayer].score --
    }

    printPlayers();
});

