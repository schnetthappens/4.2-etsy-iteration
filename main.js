
var _ = require('underscore');
var items = require('./json/items.json');


//EXERCISE 1 — Print the average price to the console

  /*Print the average price to the console*/
var average = _.reduce(items, function(total, item) {
  return total + item.price;
}, 0) / items.length;
console.log("The average price is " + "$" + average);



//EXERCISE 2 — Console log an array of items between $14-$18

/*
WHAT DO I KNOW
I already have an array of objects
Each of those objects has a price value
Need to have certain objects (based on their price) returned to me
The returned array will be shorter than the length of the original array
*/


var filterByPrice = _.filter(items, function(filterItem) {
  return Number (filterItem.price) > 14 && (filterItem.price) < 18;
});

filterByPrice.forEach(function(item) {
  console.log("Items that cost between $14.00 USD and 18.00 USD: " + item.title);
});


//EXERCISE 3— Find the item with $GBP currency code and print its name and price

/*
WHAT DO I KNOW
I already have an array of objects
Each of those objects has a currency value
Need to have a certain object (based on its currency value) returned to me
*/


var findGbp = _.filter(items, function(getCurrencyCode) {
  return (getCurrencyCode.currency_code === "GBP");
});

findGbp.forEach(function(item) {
  console.log(item.title + " costs " + "£" + item.price);
});



//EXERCISE 4— Find which items are made of wood and print to console.

/*
WHAT DO I KNOW
I'm starting with an array of objects
I need to filter the array into a smaller array with the items made of wood ONLY
The materials property, is and of itself, an array
I might be able to use the _.contain underscore function
*/

var madeOfWood = _.filter(items, function(findWoodenItems) {
  //return an array of items whose material array contains "wood"
  return _.contains(findWoodenItems.materials, "wood");
});

madeOfWood.forEach(function(item) {
  console.log(item.title);
});



//EXERCISE 5— Find which items are made of eight or more materials.

/*
WHAT DO I KNOW
I'm starting with an array of objects (all)
I need to filter the array into a smaller array
Want to find objects whose materials array is greater than eight values
*/

var madeWithEightMaterials = _.filter(items, function(findAllItems) {
  return (findAllItems.materials.length > 8);
});

madeWithEightMaterials.forEach(function(item) {
  console.log(item.title, item.materials);
});




//EXERCISE 6— Calculate how many items were made by their sellers.
