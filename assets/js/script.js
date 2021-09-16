//main script file



var allDrinkIngredients =  [];
var allMealIngredients = [];
var ingredientInputOne = 'gin';
var mealIngredientInputOne = 'pork'; 
var ingredientInputTwo = document.querySelector('#ingredient-input-two');
var placeHolderIngredientSpot = document.querySelector('.drink-options');


var queryDrinksID = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredientInputOne;
var queryMealID = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + mealIngredientInputOne;

console.log(queryDrinksID)
console.log(queryMealID)

fetch(queryDrinksID)                 
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    selectRandomDrink(data)
  })

  fetch(queryMealID)                 
  .then(function(response){
      return response.json();
  })
  .then(function(dataMeal){
      console.log(dataMeal)
      selectRandomMeal(dataMeal)
      
    })



function selectRandomDrink(data){
  var randomDrink = data.drinks[(Math.floor(Math.random() * data.drinks.length))];
    console.log(randomDrink)
    console.log(randomDrink.idDrink)
    selectRandomDrinkDetails(randomDrink)
}

function selectRandomMeal(dataMeal){
  console.log(dataMeal);
  var randomMeal = dataMeal.meals[(Math.floor(Math.random() * dataMeal.meals.length))];
    console.log(randomMeal)
    console.log(randomMeal.idMeal)
    selectRandomMealDetails(randomMeal)
}



function selectRandomDrinkDetails(randomDrink) { 
var randomDrinkDetails = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + randomDrink.idDrink;
console.log(randomDrinkDetails)
localStorage.setItem('drink-Api', randomDrinkDetails)
}

function selectRandomMealDetails(randomMeal) { 
  var randomMealDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + randomMeal.idMeal;
  console.log(randomMealDetails)
  localStorage.setItem('meal-Api', randomMealDetails)
    }




