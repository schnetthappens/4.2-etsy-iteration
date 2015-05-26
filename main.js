
var _ = require('underscore');
var items = require('./json/items.json');


  // /*Get price value from all of the objects in the items array*/
  // var getPrices = _.map(items, function(item)  {
  //   return item.price;
  // });
  //
  //
  // /*Get the sum of the prices returned from the mapped array*/
  // var sumOfPrices = _.reduce(getPrices, function(a, b) {
  //   return a + b;
  // });
  //
  //
  // // /*Print the average price to the console*/
  // function getAveragePrice(sumOfPrices, getPrices) {
  //   var averagePrice = sumOfPrices / items.length;
  //   console.log(averagePrice);
  // }

  //EXERCISE 1 — Print the average price to the console

  /*Print the average price to the console*/
var average = _.reduce(items, function(total, item) {
  return total + item.price;
}, 0) / items.length;
console.log(average);



//EXERCISE 2 — Console log an array of items between $14-$18

/*
WHAT DO I KNOW
I already have an array of objects
Each of those objects has a price value
Need to have certain objects (based on their price) returned to me
The returned array will be shorter than the length of the original array
*/

var filterPrice = _.filter(items, function(returnProducts) {
  return Number (returnProducts.price) > 14 && (returnProducts.price) < 18;
});

filterPrice.forEach(function(item) {
  console.log(item.title);
});
