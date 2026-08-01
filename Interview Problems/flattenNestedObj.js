const obj = {
    name: "Arun",
    address: {
        city: "Chennai",
        state: "Tamil Nadu",
        pin: 600001
    }
};

let result = {};
function flattenObject(obj, prefix = "") {

    for (key in obj) {
        let updatedPrefix = prefix === "" ? key : prefix + "." + key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenObject(obj[key], updatedPrefix);
        }
        else {
            result[updatedPrefix] = obj[key];
        }
    }
    return result;
}

console.log(flattenObject(obj));
