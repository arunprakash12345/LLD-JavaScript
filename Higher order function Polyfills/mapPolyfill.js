

const arr = [1, 2, 3, 4];

arr.map((a, index, arr) => {
    console.log(a);
});

Array.prototype.myMap = function (cb, thisArgs) {
    if (typeof cb !== "function")
        throw new TypeError(cb + " is not a function");
    if (!thisArgs)
        thisArgs = {};
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this)
            result.push(cb.call(thisArgs, this[i], i, this));
    }
    return result;
}

const res = arr.myMap((a) => a * 2);
console.log(res);