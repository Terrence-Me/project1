# Random Meal & Drink Generator

## Overview

### What type of meal and drink to have for dinner?

There are too many times when it comes to what is for dinner, one doesn’t have an idea and so we came up with a meal and drink application.

The Idea is to randomly choose a meal and a drink by selecting the type of main ingredient for the meal and drink, such as selecting Beef and Rum.  The user would select the options and a meal/drink will be displayed with the necessary ingredients to create both meal and drink.

## Details

* What is used to create the application:
  * Basic Html and:
  * <https://code.jquery.com/jquery-3.5.1.min.js>
  * <https://fonts.googleapis.com>
  * <https://fonts.gstatic.com>
* Drinks API:  
  * <https://www.thecocktaildb.com/api/json/v1/1/filter.php>
  * <https://www.thecocktaildb.com/api/json/v1/1/lookup.php>

* Meal API:
  * <https://www.themealdb.com/api/json/v1/1/filter.php>
  * <https://www.themealdb.com/api/json/v1/1/lookup.php>



* # How does the application work?

	Firstpage.html is the landing page.  The user will be presented with two categories a Meals section and a Drinks section.
	The two sections contain a dropdown list box (optiongroup) where the user will select the type of meal and drink.  Once the options are selected the user will then click on the submit button which will then send them over to the second page.
	The secondpage.html will have a random meal and drink that will contain one of the selected ingredients from the dropdown list box along with an image, all ingredients and directions on how to make it. 
