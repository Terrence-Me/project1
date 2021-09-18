//main script file
var mealOptions = ["Pork", "Chicken", "Seafood", "Vegetarian", "Beef"]
var selectMeal = document.getElementById("dinner");
var drinkOptions = ["Whiskey", "Tequila", "Rum", "Gin", "Scotch"]
var selectDrink = document.getElementById("liquor");
var allDrinkIngredients =  [];
var allMealIngredients = [];
var ingredientInputOne;
var mealIngredientInputOne;
var ingredientInputTwo = document.querySelector('#ingredient-input-two');
var placeHolderIngredientSpot = document.querySelector('.drink-options');



//Dynamically render user drink and meal options.
for(var i=0; i < mealOptions.length; i++)
{
  var opt = document.createElement("option");
  opt.value= mealOptions[i];
  opt.innerHTML = mealOptions[i];
  selectMeal.appendChild(opt);
}

for(var i=0; i < drinkOptions.length; i++)
{
  var opt = document.createElement("option");
  opt.value= drinkOptions[i];
  opt.innerHTML = drinkOptions[i];
  selectDrink.appendChild(opt);
}



// The user input values are concated to the API and stored into variables
//A fetch is ran on both API's. Each API is a list of drink names and a drink name ID
//The data retrieved from the API's are passed into a selectRandomDrink and selectRandomMeal function
//Go to where each function is declared


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


  //The two functions below take the list of drinks provided by the API and radomly selects a drink and meal. 
  //The selected drink and meal *ID's* are then passed to the selectRandomDrinkDetails and selectRandomMealDetails function
  //Go to where functions are declared
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


//The randomly selected drink ID is then concated to another api url in order to pull that drink and meals specific details
//The complete drink and meal API URL's are stored in local storage
//goToPageTwo function is then ran
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


//takes us to second page using document.location
function goToPageTwo() { 

document.location = "./secondpage.html";
}


    //event listener. When button is clicked the user input values are stored in the two variables below and are passed as parameters into the concatApi function
    //Go to where concat API function is decalred
    document.getElementById("btnsubmit").addEventListener("click", function() {
     
     
      ingredientInputOne = document.getElementById("liquor").value;
      mealIngredientInputOne = document.getElementById("dinner").value;
      

      concatApi(ingredientInputOne, mealIngredientInputOne)
    });