// Länk till API'et som vi använt: 
// https://www.themealdb.com/api.php

let letter = "b";
let category = "Vegetarian";
let matList = document.getElementById("matList");
let matBox = document.getElementById("matBox");

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)
.then (response => response.json())
.then (data => {
    console.log(data);
    printMeals(data);
})

function printMeals(list) {
    console.log("list", list);

    mealsList = document.createElement("ul");
    mealsList.id = "mealsList";

    for (meal in list.meals) {
        // console.log(list.meals[meal].strMeal);
        mealsList.insertAdjacentHTML("beforeend", "<li id='"+ list.meals[meal].idMeal +"'>" + list.meals[meal].strMeal + "</li>")
    }

    mealsList.addEventListener("click", function(evt){
        // console.log(evt);
        printMeal(evt.target.id);
    })

    matList.insertAdjacentElement("beforeend", mealsList)

}

function printMeal(id) {
    console.log("Skriv ut ", id);

    times = 5;

    matBox.innerHTML = "";
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
    .then(response => response.json())
    .then(data => {
        
        console.log("Maträtt", data);

        mealTemplate = `<h3>${data.meals[0].strMeal}</h3>
                        <strong>${data.meals[0].strCategory}</strong>
                        <div><img src="${data.meals[0].strMealThumb}" /></div>
                        <div>${data.meals[0].strInstructions}</div>
                        <div><h4>Ingredienser</h4></div>
                        <div>${ (data.meals[0].strIngredient1) ? data.meals[0].strIngredient1 + " | " + data.meals[0].strMeasure1 : "" }</div>
                        <div>${ (data.meals[0].strIngredient2) ? data.meals[0].strIngredient2 + " | " + data.meals[0].strMeasure2 : "" }</div>
                        <div>${ (data.meals[0].strIngredient3) ? data.meals[0].strIngredient3 + " | " + data.meals[0].strMeasure3 : "" }</div>
                        <div>${ (data.meals[0].strIngredient4) ? data.meals[0].strIngredient4 + " | " + data.meals[0].strMeasure4 : "" }</div>
                        <div>${ (data.meals[0].strIngredient5) ? data.meals[0].strIngredient5 + " | " + data.meals[0].strMeasure5 : "" }</div>
                        <div>${ (data.meals[0].strIngredient6) ? data.meals[0].strIngredient6 + " | " + data.meals[0].strMeasure6 : "" }</div>
                        <div>${ (data.meals[0].strIngredient7) ? data.meals[0].strIngredient7 + " | " + data.meals[0].strMeasure7 : "" }</div>
                        <div>${ (data.meals[0].strIngredient8) ? data.meals[0].strIngredient8 + " | " + data.meals[0].strMeasure8 : "" }</div>
                        <div>${ (data.meals[0].strIngredient9) ? data.meals[0].strIngredient9 + " | " + data.meals[0].strMeasure9 : "" }</div>
                        <div>${ (data.meals[0].strIngredient10) ? data.meals[0].strIngredient10 + " | " + data.meals[0].strMeasure10 : "" }</div>`

        matBox.insertAdjacentHTML("beforeend", mealTemplate);
    })

}