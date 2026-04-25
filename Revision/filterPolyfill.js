const arr = [1, 2, 3, 4, 5];
const result = arr.filter((a) => {
  return a % 2 == 0;
});
console.log(result);

// Polyfill for filter
Array.prototype.myFilter = function (callback) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) resultArr.push(this[i]);
  }
  return resultArr;
};

const result1 = arr.myFilter((a) => {
  return a % 2 == 0;
});
console.log(result1);
