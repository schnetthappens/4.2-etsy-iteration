
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

  /*Print the average price to the console*/
var average = _.reduce(items, function(total, item) {
  return total + item.price;
}, 0) / items.length;
console.log(average);
