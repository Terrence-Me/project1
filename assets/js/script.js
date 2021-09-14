//main script file


// these are user inputs for ingredients. The first one has a placeholder of gin
var allIngredients =  []
var ingredientInputOne = 'gin'
var ingredientInputTwo = document.querySelector('#ingredient-input-two')



// this is storing the api and concating the variable with the value of gin (the placeholder userinput)
var queryDrinksID = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredientInputOne


console.log(queryDrinksID)


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


//this is randomly selecting a drink based on the userinput (gin). Test it out in the console and let me know your thoughts!
function selectRandomDrink(data){
  var randomDrink = data.drinks[(Math.floor(Math.random() * data.drinks.length))];
    console.log(randomDrink)
    console.log(randomDrink.idDrink)
    selectRandomDrinkDetails(randomDrink)
}

//This is concating the randomly selected drink ID with the second drink API that has all the details of the drink
function selectRandomDrinkDetails(randomDrink) { 
var randomDrinkDetails = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + randomDrink.idDrink;
console.log(randomDrinkDetails)

fetch(randomDrinkDetails)                 
.then(function(response){
    return response.json();
})
.then(function(data1){
   
    compileDataToRender(data1)
  })

}


//I couldn't figure out how to do this more efficiently so I did it a long way. I'm taking all the drink ingredients, putting them into a variable and then storing them into an array
//I also took the recipie description and put it into an array as well
function compileDataToRender(data1){

console.log(data1)


  var strIngredient1 = data1.drinks[0].strIngredient1
  var strIngredient2 = data1.drinks[0].strIngredient2
  var strIngredient3 = data1.drinks[0].strIngredient3
  var strIngredient4 = data1.drinks[0].strIngredient4
  var strIngredient5 = data1.drinks[0].strIngredient5
  var strIngredient6 = data1.drinks[0].strIngredient6
  var strIngredient7 = data1.drinks[0].strIngredient7
  var strIngredient8 = data1.drinks[0].strIngredient8
  var strIngredient9 = data1.drinks[0].strIngredient9
  var strIngredient10 = data1.drinks[0].strIngredient10
  var strIngredient11 = data1.drinks[0].strIngredient11
  var strIngredient12 = data1.drinks[0].strIngredient12
  var strIngredient13 = data1.drinks[0].strIngredient13
  var strIngredient14 = data1.drinks[0].strIngredient14
  var strIngredient15 = data1.drinks[0].strIngredient15


  allIngredients.push(strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15 )
  console.log(allIngredients)
  


var strInstructions = data1.drinks[0].strInstructions


renderIngredients(allIngredients);
renderInstructions(strInstructions);
} 



//This is where we will render the data dynamically to the page for ingredients 

function renderIngredients(allIngredients){
  
  console.log(allIngredients.length)

  for (var i = 0; i < allIngredients.length; i++){
    if (allIngredients[i] !== null){
      console.log(allIngredients[i]) 



    } else {
      return
    }};
}
//This is where we will render the data dynamically to the page for recipie description 

function renderInstructions(strInstructions){

  console.log(strInstructions)


}


var allLi = document.querySelector

// This might be a way of adding classes to all li elements
addingClassUsingJavascript();
   function addingClassUsingJavascript() {
      const all = document.querySelectorAll('li');
      all.forEach(function (t, i) {
         if (i === 1) {
            t.classList.add('demo1');
         } else if (i === 2) {
            t.classList.add('demo2');
         }
      });
   }
