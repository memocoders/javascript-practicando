/*
 Create a function that takes in a cost and a quantity and outputs the total
 pre-tax cost for that quantity of items at the given price. For example
*/

var totalCost = function (quantity, price) {
    var total = quantity * price;
    return total;
};

console.log(totalCost(5, 5.99));
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     => 29.950000000000003