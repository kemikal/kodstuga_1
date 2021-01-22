console.log("test");

selectCars = document.getElementById("carBrand");
chooseCar = document.getElementById("chooseCar");

// Variabeln selectCars som nu innehåller DOM objectet select och dess values
console.log("select", selectCars)

chooseCar.addEventListener("click", function(){
    // Skriv ut valt value option och dess value efter ett klick
    console.log("Du vill ha en " + selectCars.value);
});