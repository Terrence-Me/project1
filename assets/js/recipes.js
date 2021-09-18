var drinkSelection = localStorage.getItem('drink-Api');
var mealSelection = localStorage.getItem('meal-Api');


var allDrinkIngredients = [];
var allMealIngredients = [];
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
            console.log(data1)
           
        })

};

    
//this function takes the ingredients, drink instructions, drinkName and drink image and stores them all into variables. 
function compileDrinkDataToRender(data1) {
    
    
    for (var i = 0; i < 15; i++) {

        
        var prop = 'strIngredient' + (i + 1);
        if (data1.drinks[0][prop] !== null) { 
            
            
            allDrinkIngredients.push(data1.drinks[0][prop])
            console.log(allDrinkIngredients)
        }
    }
    


    // var strIngredient1 = data1.drinks[0].strIngredient1
    // var strIngredient2 = data1.drinks[0].strIngredient2
    // var strIngredient3 = data1.drinks[0].strIngredient3
    // var strIngredient4 = data1.drinks[0].strIngredient4
    // var strIngredient5 = data1.drinks[0].strIngredient5
    // var strIngredient6 = data1.drinks[0].strIngredient6
    // var strIngredient7 = data1.drinks[0].strIngredient7
    // var strIngredient8 = data1.drinks[0].strIngredient8
    // var strIngredient9 = data1.drinks[0].strIngredient9
    // var strIngredient10 = data1.drinks[0].strIngredient10
    // var strIngredient11 = data1.drinks[0].strIngredient11
    // var strIngredient12 = data1.drinks[0].strIngredient12
    // var strIngredient13 = data1.drinks[0].strIngredient13
    // var strIngredient14 = data1.drinks[0].strIngredient14
    // var strIngredient15 = data1.drinks[0].strIngredient15


    // allDrinkIngredients.push(strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15)
    var strDrinkInstructions = data1.drinks[0].strInstructions
    var drinkName = data1.drinks[0].strDrink
    var drinkImage = data1.drinks[0].strDrinkThumb
    

    renderDrinkName(drinkName);
    renderDrinkImage(drinkImage);
    renderDrinkIngredients(allDrinkIngredients);
    renderDrinkInstructions(strDrinkInstructions);
}


//renders drink ingredients using for loop since there are multiple ingredients
function renderDrinkIngredients(allDrinkIngredients) {

    

    for (var i = 0; i < allDrinkIngredients.length; i++) {
        if (allDrinkIngredients[i] !== null) {
            console.log(allDrinkIngredients[i])
            var drinkIngredient = document.createElement('li')
            drinkIngredient.classList.add('drink-ingredient-li')
            drinkIngredient.textContent = allDrinkIngredients[i]
            drinkUlEl.append(drinkIngredient)


        } else {
            return
        }
    }
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


    console.log(data2)
    for (var i = 0; i < 20; i++) {

        
        var prop = 'strIngredient' + (i + 1);
        if (data2.meals[0][prop] !== "") { 
            
            
            allMealIngredients.push(data2.meals[0][prop])
            console.log(allMealIngredients)
        }
    }
    


    // var strIngredient1 = data2.meals[0].strIngredient1
    // var strIngredient2 = data2.meals[0].strIngredient2
    // var strIngredient3 = data2.meals[0].strIngredient3
    // var strIngredient4 = data2.meals[0].strIngredient4
    // var strIngredient5 = data2.meals[0].strIngredient5
    // var strIngredient6 = data2.meals[0].strIngredient6
    // var strIngredient7 = data2.meals[0].strIngredient7
    // var strIngredient8 = data2.meals[0].strIngredient8
    // var strIngredient9 = data2.meals[0].strIngredient9
    // var strIngredient10 = data2.meals[0].strIngredient10
    // var strIngredient11 = data2.meals[0].strIngredient11
    // var strIngredient12 = data2.meals[0].strIngredient12
    // var strIngredient13 = data2.meals[0].strIngredient13
    // var strIngredient14 = data2.meals[0].strIngredient14
    // var strIngredient15 = data2.meals[0].strIngredient15
    // var strIngredient16 = data2.meals[0].strIngredient16
    // var strIngredient17 = data2.meals[0].strIngredient17
    // var strIngredient18 = data2.meals[0].strIngredient18
    // var strIngredient19 = data2.meals[0].strIngredient19
    // var strIngredient20 = data2.meals[0].strIngredient20

    // allMealIngredients.push(strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8,
    //     strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17,
    //     strIngredient18, strIngredient19, strIngredient20)
    



    var strMealInstructions = data2.meals[0].strInstructions;
    var mealName = data2.meals[0].strMeal
    var mealImage = data2.meals[0].strMealThumb
    

    renderMealName(mealName);
    renderMealImage(mealImage);
    renderMealIngredients(allMealIngredients);
    renderMealInstructions(strMealInstructions);
}

function renderMealIngredients(allMealIngredients) {

   


    for (var i = 0; i < allMealIngredients.length; i++) {
        if (allMealIngredients[i] !== "") {
            console.log(allMealIngredients[i])
            var mealIngredient = document.createElement('li')
            mealIngredient.classList.add('meal-ingredient-li')
            mealIngredient.textContent = (allMealIngredients[i])
            mealUlEl.append(mealIngredient)



        } else {
            return
        }
    };
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