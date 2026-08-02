// Deep copy
let person1 = { name: "John", age: 30 };
let person2 = deepCopy(person1);
console.log(person2);
person2.name = "Arun";
console.log(person2);
console.log(person1);



// Polyfill for Deep copy
function deepCopy(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (obj instanceof Function) {
        return obj.bind({});
    }
    if (obj instanceof Array) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepCopy(obj[i]);
        }
        return arrCopy;
    }
    if (obj instanceof Object) {
        let copyObj = {};
        for (key in obj) {
            copyObj[key] = deepCopy(obj[key]);
        }
        return copyObj;
    }
}