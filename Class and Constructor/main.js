

function Pizzza(toppings, size, crustType) {

  this.toppings = toppings;
  this.size = size;
  this.crustType = crustType;
  console.log(`Pizzza with ${this.toppings}, ${this.size}, and ${this.crustType} crust is ready to serve`);

  // this points to the obj because we are using new keyword to create the object 
  // new keyword is used to create the object function is how it is called is important
}

const p1 = new Pizzza("Pepperoni", "Large", "Thin");

const p2 = new Pizzza("Mushrooms", "Medium", "Thick");


