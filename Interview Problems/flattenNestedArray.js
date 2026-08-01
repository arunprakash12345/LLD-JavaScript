const nestedArray = [1, [2, 3], [4, [5, 6], 7]]; // op = [1,2,3,4,5,6,7]


function flattenNestedArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = flattenNestedArray(arr[i]);
            result.push(...res);
        }
        else { result.push(arr[i]); }
    }
    return result;
}


console.log(flattenNestedArray(nestedArray));


// Using reduce 

function flattenReduce(arr) {
    return arr.reduce((flattenArr, item) => {
        return flattenArr.concat(Array.isArray(item) ? flattenReduce(item) : item);
    }, [])
}

console.log(flattenReduce(nestedArray));