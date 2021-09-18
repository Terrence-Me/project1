//main script file



var allDrinkIngredients =  [];
var allMealIngredients = [];
var ingredientInputOne;
var mealIngredientInputOne;
var ingredientInputTwo = document.querySelector('#ingredient-input-two');
var placeHolderIngredientSpot = document.querySelector('.drink-options');

function concatApi(ingredientInputOne, mealIngredientInputOne){ 
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

  }

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
    goToPageTwo()
    }

function goToPageTwo() { 

document.location = "./secondpage.html";
}



    document.getElementById("btnsubmit").addEventListener("click", function() {
      alert("Hello");
      var repoEl = document.createElement('a');
      //repoEl.classList = 'list-item flex-row justify-space-between align-center';
      repoEl.setAttribute('href', 'secondpage.html');//?repo=' + repoName);
      ingredientInputOne = document.getElementById("liquor").value;
      mealIngredientInputOne = document.getElementById("dinner").value;
      /* localStorage.setItem("mealIngredientInputOne", mealIngredientInputOne);
      localStorage.setItem("mealIngredientInputOne", mealIngredientInputOne);  */
      //window.Location.href = "../secondpage.html";

      concatApi(ingredientInputOne, mealIngredientInputOne)
    });