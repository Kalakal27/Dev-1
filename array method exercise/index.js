var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var popped = vegetables.pop();
console.log(vegetables);

var popped = fruit.shift();
console.log(fruit);

var index = fruit.indexOf("orange");
console.log(index);

fruit.push(1);
console.log(fruit);

console.log(vegetables.length);

vegetables.push(3);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

var removed = food.splice(4, 2,);
console.log(food);

food.reverse();
console.log(food);

food.toString();


