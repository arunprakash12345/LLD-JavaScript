const arr = [1, [2, 3], [4, [5, 6], 7]];

function flatternArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatternArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatternArray(arr));

// Reduce method
function flattenArrayReduce(arr) {
  return arr.reduce((flattendedArray, item) => {
    return flattendedArray.concat(
      Array.isArray(item) ? flattenArrayReduce(item) : item,
    );
  }, []);
}

console.log(flattenArrayReduce(arr));
