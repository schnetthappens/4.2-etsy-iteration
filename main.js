
var _ = require('underscore');
var items = require('./json/items.json');


/*
Need to get price from all of the objects in the items array
*/

var findPrice = _.map(items, function(item)  {
  // return item.price;
  console.log(item.price);
});
