var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
function whileLoop() {
  var i = 0;
  while(i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
  }
}
// Write a for loop that prints out the contents of ingredients:
function forLoop() {
  for(var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
  }
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
function backwards() {
  for(var i = ingredients.length; i > 0; i--) {
    console.log(ingredients[i - 1]);
  }
}

whileLoop();
forLoop();
backwards();