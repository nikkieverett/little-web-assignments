//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon

// inventory.fullfillOrder({
//   omelets: 4,
      //12 eggs, 8 bacons, 4 cheese

//   eggPlates: 12
      //24 eggs, 36 bacons, 0 cheese

  //total = 36 eggs, 43 bacons, 4 cheese
// });

// How many eggs do you have left?
// How many strips of bacon do you have left?
// How many units of cheese do you have left?

var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143,
};
function Order(numberOfOrders, eggs, bacon, cheese) {
  this.numberOfOrders = numberOfOrders;
  this.eggs = eggs;
  this.bacon = bacon;
  this.cheese = cheese;
}
Order.prototype.make = function(){
  inventory.eggs -= (this.eggs * this.numberOfOrders);
  inventory.stripsOfBacon -= (this.bacon * this.numberOfOrders);
  inventory.cheeseUnits -= (this.cheese * this.numberOfOrders);
};
var omelete = new Order(4,3,2,1);
omelete.make();
var eggplate = new Order(12,2,3,0);
eggplate.make();

console.log(inventory.eggs);
console.log(inventory.stripsOfBacon);
console.log(inventory.cheeseUnits);

// function fullfillOrder(orders) {
//   // Implement this
//   inventory.eggs -= orders.omeletes * 3;
//   inventory.stripsOfBacon -= orders.omelets * 2;
//   inventroy.cheeseUnits -= orders.omelets * 1;
//
//   inventory.eggs -= orders.eggPlates * 2;
//   inventory.stripsOfBacon -= orders.eggPlates * 3;
// }
