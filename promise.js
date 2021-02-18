let userName;

console.log("Ett");

let getUserName = new Promise(function (resolve, reject) {
    if("a" == "b") {
        setTimeout(function() {
            resolve(
                console.log("Resolve: det blev bra!"),
                userName = "Janne"
                )
        }, 2000)
        
    } else {
        setTimeout(function() {
            reject("Reject: Det blev fel!")
        }, 2000)
        
    }
});

// setTimeout(function() {
//     console.log("Två");
//     userName = "Janne";
// }, 2000);

getUserName.then( function(resolve) {
    console.log("Tre", userName);
})
.catch(error => console.log(error))
.finally((data) => {
    console.log("All done"),
    (userName) ? document.body.insertAdjacentHTML("beforeend", "<h1>"+ userName + "</h1>") : document.body.insertAdjacentHTML("beforeend", "<br>Please login")
});

(() => {
    document.body.style.backgroundColor = "gold";
    document.body.insertAdjacentHTML("afterbegin", new Date().getMinutes() + ":" + new Date().getSeconds())
}) ();