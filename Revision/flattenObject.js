const nestedObj = {
  a: 1,
  b: {
    c: [2, [3, 4]],
    d: {
      e: 3,
    },
  },
};

let result = {};
function flattenObj(obj, prefix = "") {
  for (let key in obj) {
    const updatedKey = prefix !== "" ? prefix + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObj(obj[key], updatedKey);
    } else result[updatedKey] = obj[key];
  }
  return result;
}

console.log(flattenObj(nestedObj));
