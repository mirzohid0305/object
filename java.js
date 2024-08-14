// function cloneObject(value) {
//   console.log(value, typeof value);
//   if (value === null || typeof value !== "object") {
//     return value;
//   }
//   if (Array.isArray(value)) {
//     return value.map(cloneObject);
//   }
//   const cloneObj = {};
//   for (const key in value) {
//     cloneObj[key] = cloneObject(value[key]);
//   }
//   return cloneObj;
// }

// const obj = {
//   name: "Mirzohid",  // fixed typo in 'name'
//   age: 21,
// };
// console.log(obj.name);  // fixed typo in 'name'

// const arr = [[12, 23, [77, 44]], 86, "test", NaN];
// const cloneArray = cloneObject(arr);
// console.log(arr == cloneArray);  // false, because they are different objects



// 500 ta object yaratish va yig'indisini qo'shish
const objects = [];
for (let i = 0; i < 500; i++) {
  const obj = {
    id: i + 1,
    value: Math.floor(Math.random() * 100) + 1, 
  };
  objects.push(obj);
}


let sum = 0;
for (let i = 0; i < objects.length; i++) {
  sum += objects[i].value;
}

console.log("500 ta objectlarning yig'indisi: " + sum);

