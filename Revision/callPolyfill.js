const obj = {
  name: "Arun",
  printName: function () {
    return this.name;
  },
};

const obj2 = {
  name: "Prakash",
};

// Basic level
Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

console.log(obj.printName.myCall(obj2));

//Interview level
Function.prototype.myCall1 = function (context, ...args) {
  if (typeof this !== "function") throw new TypeError("Not callable");
  context = context == null ? globalThis : Object(context);

  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
