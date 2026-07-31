const arr = [1, 2, 3, 4, 5];

const isEven = {
    even: false
};

const res = arr.filter(
    function (a) { return this.even ? a % 2 === 0 : a % 2 !== 0 }, isEven
);

Array.prototype.myFilter = function (cb, thisArg) {

    if (typeof cb !== "function") throw new TypeError("Cb must be a function");

    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (cb.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
}

console.log(res);   