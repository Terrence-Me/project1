//main script file

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

