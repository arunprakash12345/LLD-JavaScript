class Pizzza {
    #toppings;
    #size;
    #crustType;

    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
    }

    get toppings() {
        return this.#toppings;
    }

    set toppings(toppings) {
        this.#toppings = toppings;
    }

    get size() {
        return this.#size;
    }

    set size(size) {
        this.#size = size;
    }

    get crustType() {
        return this.#crustType;
    }

    set crustType(crustType) {
        this.#crustType = crustType;
    }

    servePizza() {
        console.log(`Pizza with ${this.toppings}, ${this.size}, and ${this.crustType} crust is ready to serve`);
    }


}

const p1 = new Pizzza("Pepperoni", "Large", "Thin");
const p2 = new Pizzza("Mushrooms", "Medium", "Thick");

p1.servePizza();
p2.servePizza();