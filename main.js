
var _ = require('underscore');
var items = require('./json/items.json');


//EXERCISE 1 — Print the average price to the console

  /*Print the average price to the console*/
var average = _.reduce(items, function(total, item) {
  return total + item.price;
}, 0) / items.length;
console.log("The average price is " + average);



//EXERCISE 2 — Console log an array of items between $14-$18

/*
WHAT DO I KNOW
I already have an array of objects
Each of those objects has a price value
Need to have certain objects (based on their price) returned to me
The returned array will be shorter than the length of the original array
*/

var filterByPrice = _.filter(items, function(filterProducts) {
  return Number (filterProducts.price) > 14 && (filterProducts.price) < 18;
});

filterByPrice.forEach(function(item) {
  console.log(item.title);
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
