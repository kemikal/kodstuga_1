$(document).ready(function(){

    let myText = $("#text").text();

    console.log(myText);

    $("#myBtn").mouseenter(function(){ 
        //$("#text").slideToggle()
        $("#text").css("background-color", "gold").slideToggle(5000)
    });

    // $("#myBtn").click(function(){ 
    //     $("#text").fadeToggle(2000)
    //     let getColor = $("#text").css("background-color")
    //     $("#text").text(getColor)
    // });

    $("#myBtn").click(function(){ 
        let inputText = $("#myInput").val()
        $("#myInput").val("Test")
        console.log(inputText);
    });    

    // $("#myBtn").click(function(){ 
    //     //$("#text").slideToggle()
    //     let goTo = $("#myLink").attr("href")
    //     let goHow = $("#myLink").attr("target")

    //     $("#myLink").attr("href", "https://www.hiveandfive.se")

    //     $("#text").text(goTo + "</br>" + goHow)
    // });

    $("#listBtn").click(function(){ 
        $("#list").after("<li>item</li>")
    });   

    let myArray = ["ett", "två", "tre"];

    $(myArray).each(function(i){
        console.log(myArray[i]);
    })

});