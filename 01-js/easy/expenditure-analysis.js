/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var total_amount_spent = {};

  // Calucate the total spent amounts per category
  for(var i in transactions) {
    var category = transactions[i].category;

    if(total_amount_spent.hasOwnProperty(category)){
      total_amount_spent[category] = total_amount_spent[category] + transactions[i].price;
    }
    else{
      total_amount_spent[category] = transactions[i].price;
    }
  }

  // Convert the accumulated amounts into the desired output format
   var result = [];
   for(var category in total_amount_spent) {
     var obj = {};
     obj[category] = total_amount_spent[category];
     result.push(obj);
   }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
