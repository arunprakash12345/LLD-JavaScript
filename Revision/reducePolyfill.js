const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result);

// Polyfill for reduce function
Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let startIndex = 0;
  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    if (this.length === 0)
      throw new Error(
        "Empty array. Please add some value before calling Reduce function",
      );
    acc = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const temp = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(temp);
