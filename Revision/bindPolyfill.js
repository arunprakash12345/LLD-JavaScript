Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") throw new TypeError("Not callable function");
  context = context == null ? globalThis : context;
  const key = Symbol();
  context[key] = this;
  return function (...newargs) {
    const result = context[key](...args, ...newargs);
    delete context[key];
    return result;
  };
};

function greet(city, country) {
  return `${this.name} from ${city}, ${country}`;
}

const user = { name: "Arun" };

const fn = greet.myBind(user, "Chennai");

console.log(fn("India"));
// Arun from Chennai, India
