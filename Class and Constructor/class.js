
class Pizzza {
    static totalPizzas = 0;
    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
        Pizzza.totalPizzas++;
    }
    servePizza() {
        console.log(`Pizza with ${this.toppings}, ${this.size}, and ${this.crustType} crust is ready to serve`);
    }

    // Static belongs to class not to the instance of an object so we can call without using the instance directly by class name
    static random() {
        // console.log(this);
    }
}

const p1 = new Pizzza("Pepperoni", "Large", "Thin");
const p2 = new Pizzza("Mushrooms", "Medium", "Thick");

// p1.servePizza();
// p2.servePizza();

Pizzza.random();


class StuffedPizza extends Pizzza {
    constructor(toppings, size, crustType, cheeseType) {
        super(toppings, size, crustType);
        this.cheeseType = cheeseType;
    }
    serveStuffedPizza() {
        console.log(`Pizza with ${this.toppings}, ${this.size}, and ${this.crustType} crust is ready to serve`);
    }
}

const p3 = new StuffedPizza("Pepperoni", "Large", "Thin");
const p4 = new StuffedPizza("Mushrooms", "Medium", "Thick");

p3.serveStuffedPizza();
p4.serveStuffedPizza();

console.log(Pizzza.totalPizzas);