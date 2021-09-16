//main script file
//www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
//

andrew_branch


// these are user inputs for ingredients. The first one has a placeholder of gin
var allDrinkIngredients =  [];
var allMealIngredients = [];
// var saveMealDataLocalStorage = []
var ingredientInputOne = 'gin';
var mealIngredientInputOne = 'pork'; 
var ingredientInputTwo = document.querySelector('#ingredient-input-two');
var placeHolderIngredientSpot = document.querySelector('.drink-options');


// this is storing the api and concating the variable with the value of gin (the placeholder userinput)
var queryDrinksID = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredientInputOne;
var queryMealID = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + mealIngredientInputOne;

console.log(queryDrinksID)
console.log(queryMealID)

//This is fetching the API
fetch(queryDrinksID)                 
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    //this starts and passes the api data into the selectRandomDrink function below
    selectRandomDrink(data)
  })

  fetch(queryMealID)                 
  .then(function(response){
      return response.json();
  })
  .then(function(dataMeal){
      console.log(dataMeal)
      selectRandomMeal(dataMeal)
      //this starts and passes the api data into the selectRandomDrink function below
      // selectRandomMeal(dataMeal)
    })

//update

//this is randomly selecting a drink based on the userinput (gin). Test it out in the console and let me know your thoughts!
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



//This is concating the randomly selected drink ID with the second drink API that has all the details of the drink
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
=======
var drinkName = 'margarita';
var drinkSearchApi ='https://www.thecocktaildb.com/api/json/v1/1/search.php';


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch(drinkSearchApi, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
main





