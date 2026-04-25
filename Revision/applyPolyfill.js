const obj = {
  name: "Arun",
  printName: function () {
    return this.name;
  },
};

const obj2 = {
  name: "Prakash",
};

// console.log(obj.printName.apply(obj2));

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") throw new TypeError("Not an function");
  context = context == null ? globalThis : Object(context);
  const key = Symbol();
  context[key] = this;
  let result;
  if (args == null) {
    result = context[key]();
  } else {
    if (Array.isArray(args)) throw new TypeError("Not an array");
    result = context[key](...args);
  }
  delete context[key];
  return result;
};

console.log(obj.printName.myApply(obj2));
