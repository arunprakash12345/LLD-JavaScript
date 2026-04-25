const arr = [1, 2, 3, 4, 5];
const result = arr.map((a) => {
  return a * 2;
});
console.log(result);

// Polyfill for map
Array.prototype.myMap = function (callback) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    resultArr[i] = callback(this[i], i, this);
  }
  return resultArr;
};

const result1 = arr.myMap((item) => {
  return item * 2;
});
console.log(result1);
console.log(Array.prototype);
