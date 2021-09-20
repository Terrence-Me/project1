var allDrinkIngredients = [];
var allMeasurements = [];
var allMealMeasurements = [];
var allMealIngredients = [];
var drinkLis = [];
var mealLis = [];
var drinkSelection = localStorage.getItem('drink-Api');
var mealSelection = localStorage.getItem('meal-Api');
var drinkUlEl = document.querySelector('.drinks-items')
var drinkInstructionsEl = document.querySelector('.drinks-paragraph')
var mealUlEl = document.querySelector('.meals-items')
var mealInstructionsEl = document.querySelector('.meals-paragraph')
var drinkHeaderEl = document.querySelector('.drinks-head')
var mealHeaderEl = document.querySelector('.meals-head')
var drinkImageEl = document.querySelector('.drinks-img')
var mealImageEl = document.querySelector('.meals-img')


//upon page load the following two functions run. We will follow the SelectRandomDrinkDetails 
selectRandomDrinkDetails()
selectRandomMealDetails()

//this function pulls the API URL from lcoal storage and triggers the compileDrinkDataToRenderFunction
function selectRandomDrinkDetails() {

    fetch(drinkSelection)
        .then(function (response) {
            return response.json();
        })
        .then(function (data1) {

            compileDrinkDataToRender(data1)
        })
};

    
//this function takes the ingredients, drink instructions, drinkName and drink image and stores them all into variables. 
function compileDrinkDataToRender(data1) {
    
    
    for (var i = 0; i < 15; i++) {

        
        var prop = 'strIngredient' + (i + 1);
        if (data1.drinks[0][prop] !== null) { 
            
            
            allDrinkIngredients.push(data1.drinks[0][prop])
        }
    }
    
    for (var i = 0; i < 15; i++) {

        
        var prop = 'strMeasure' + (i + 1);
        if (data1.drinks[0][prop] !== null) { 
            
            
            allMeasurements.push(data1.drinks[0][prop])
        }
    }
    

    var strDrinkInstructions = data1.drinks[0].strInstructions
    var drinkName = data1.drinks[0].strDrink
    var drinkImage = data1.drinks[0].strDrinkThumb
    

    renderDrinkName(drinkName);
    renderDrinkImage(drinkImage);
    renderDrinkIngredients(allDrinkIngredients);
    renderDrinkInstructions(strDrinkInstructions);
    renderDrinkMeasurements(allMeasurements)
}


//renders drink ingredients using for loop since there are multiple ingredients
function renderDrinkIngredients(allDrinkIngredients) {

    

    for (var i = 0; i < allDrinkIngredients.length; i++) {
        if (allDrinkIngredients[i] !== null) {
            
            drinkIngredient = document.createElement('li')
            drinkIngredient.classList.add('drink-ingredient', 'drink-ingredient-li' + i)
            drinkIngredient.textContent = allDrinkIngredients[i]
            drinkUlEl.append(drinkIngredient)
            drinkLis.push(drinkIngredient);

        } else {
            return
        }
    }
}

function renderDrinkMeasurements(allMeasurements){
   
   for (var i = 0; i <allMeasurements.length; i++) { 
    if (allMeasurements[i] !== null){
        
        var drinkMeasurement = document.createElement('span')
        drinkMeasurement.textContent = allMeasurements[i]
     
        var drinkLiPlacement = document.querySelector('.drink-ingredient-li' + i)
        
        drinkLiPlacement.prepend(drinkMeasurement)
        
    }}

}

//Renders drink instructions
function renderDrinkInstructions(strDrinkInstructions) {

    var drinkDescription = document.createElement('p');
    drinkDescription.classList.add('drink-description-p')
    drinkDescription.textContent = strDrinkInstructions;
    drinkInstructionsEl.append(drinkDescription);


}

//Renders drink name
function renderDrinkName(drinkName) {
    var drinkNameHeader = document.createElement('h3')
    drinkNameHeader.classList.add('drink-name-header')
    drinkNameHeader.textContent = drinkName;
    drinkHeaderEl.append(drinkNameHeader)


}

//Renders drink image
function renderDrinkImage(drinkImage) {
    drinkImageEl.src = drinkImage
}




function selectRandomMealDetails() {

    fetch(mealSelection)
        .then(function (response) {
            return response.json();
        })
        .then(function (data2) {
           

            compileMealDataToRender(data2)

        })

}


function compileMealDataToRender(data2) {


    for (var i = 0; i < 20; i++) {

        
        var prop = 'strIngredient' + (i + 1);
        if (data2.meals[0][prop] !== "") { 
            
            
            allMealIngredients.push(data2.meals[0][prop])
        }
    }
    
    for (var i = 0; i < 20; i++) {

        
        var prop = 'strMeasure' + (i + 1);
        if (data2.meals[0][prop] !== '') { 
            
            
            allMealMeasurements.push(data2.meals[0][prop])
        }
    }
    

    var strMealInstructions = data2.meals[0].strInstructions;
    var mealName = data2.meals[0].strMeal
    var mealImage = data2.meals[0].strMealThumb
    

    renderMealName(mealName);
    renderMealImage(mealImage);
    renderMealIngredients(allMealIngredients);
    renderMealInstructions(strMealInstructions);
    renderMealMeasurements(allMealMeasurements)
}

function renderMealIngredients(allMealIngredients) {

   


    for (var i = 0; i < allMealIngredients.length; i++) {
        if (allMealIngredients[i] !== "") {
            var mealIngredient = document.createElement('li')
            mealIngredient.classList.add('meal-ingredient-li', 'meal-ingredient-li' + i)
            mealIngredient.textContent = (allMealIngredients[i])
            mealUlEl.append(mealIngredient)
            mealLis.push(mealIngredient)
        

        } else {
            return
        }
    };
}


function renderMealMeasurements(allMealMeasurements){
   
    for (var i = 0; i <allMealMeasurements.length; i++) { 
     if (allMealMeasurements[i] !== null){
         var mealMeasurement = document.createElement('span')
         mealMeasurement.textContent = allMealMeasurements[i] + " "
         var mealLiPlacement = document.querySelector('.meal-ingredient-li' + i)
         mealLiPlacement.prepend(mealMeasurement)
         
     }}
 
 }


function renderMealInstructions(strMealInstructions) {

    var mealDescription = document.createElement('p');
    mealDescription.classList.add('meal-instructions-p')
    mealDescription.textContent = strMealInstructions;
    mealInstructionsEl.append(mealDescription);


}


function renderMealName(mealName) {
    var mealNameHeader = document.createElement('h3')
    mealNameHeader.classList.add('mean-name-h3')
    mealNameHeader.textContent = mealName;
    mealHeaderEl.append(mealNameHeader)
}

function renderMealImage(mealImage) {
mealImageEl.src = mealImage
}