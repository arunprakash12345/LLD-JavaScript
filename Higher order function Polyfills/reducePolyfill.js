const arr = [1, 2, 3, 4, 5];

const res = arr.reduce(function (prevValue, currValue, i, a) {
    let lastSum = prevValue.length ? prevValue[prevValue.length - 1] : 0;
    return [...prevValue, lastSum + currValue];
}, []);

console.log(res);


Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError("Cb must be a function");
    }
    let previousValue = initialValue || this[0];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            previousValue = callback(previousValue, this[i], i, this);
        }
    }
    return previousValue;
};

const res1 = arr.myReduce(function (prevValue, currValue, i, a) {
    let lastSum = prevValue.length ? prevValue[prevValue.length - 1] : 0;
    return [...prevValue, lastSum + currValue];
}, []);

console.log(res1);