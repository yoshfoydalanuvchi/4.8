//namuna

// let animals = ["lion", "tiger", "wolf"];
// for (const test of animals) {
//   console.log(test);
// }

// let animals = ["lion", "tiger", "wolf"];
// function deleteElement(animals) {
//   animals.pop();
//   return animals;
// }
// console.log(deleteElement(animals));

// let resurs = ["diamond", "gold", "iron", "wood"];
// function lengthArray(animals) {
//   return animals.length;
// }
// console.log(lengthArray(resurs));

// let animals = ["lion", "tiger", "wolf"];
// function addElement(animals, element) {
//   animals.unshift(element);
//   return animals;
// }
// console.log(addElement(animals, "a"));

// let resurs = ["diamond", "gold", "iron", "wood"];
// function deleteElement(resurs) {
//   resurs.shift();
//   return resurs;
// }
// console.log(deleteElement(resurs));

// let animals = ["lion", "tiger", "wolf"];
// let resurs = ["diamond", "gold", "iron", "wood"];
// function addMassiv(arg1, arg2) {
//   let result = arg1.concat(arg2);
//   return result;
// }
// console.log(addMassiv(animals, resurs));

// let resurs = ["diamond", "gold", "iron", "wood"];
// function search(arg1, element) {
//   let result = arg1.includes(element);
//   return result;
// }
// console.log(search(resurs, "iron"));

// let arr = ["apelsin", "gilos", "o`rik", "behi"];
// function alfavit(arr) {
//   arr.sort();
//   return arr;
// }
// console.log(alfavit(arr));

// let arr = ["apelsin", "gilos", "o`rik", "behi"];
// function alfavit(arr) {
//   arr.sort().reverse();
//   return arr;
// }
// console.log(alfavit(arr));

// let arr = ["apelsin", "gilos", "o`rik", "behi"];
// function firstAndEnd(arg) {
//   arg.reverse();
//   return arg;
// }

// namuna tugadi

//1
// function threeColors(param1, param2, param3) {
//   let result = [param1, param2, param3];
//   return result;
// }
// console.log(threeColors("blue", "yellow", "red"));

//2
// function threeNumber(param1, param2, param3) {
//   let result = [param1, param2, param3];
//   return result;
// }
// console.log(threeNumber(3, 2, 1));

//3
// function firstAndEnd(param) {
//   let first = param[0];
//   let end = param[param.length - 1];
//   let result = [first, end];
//   return result;
// }
// console.log(firstAndEnd([3, 2, 1, 0]));

//4
// function changeSecondElement(param, element) {
//   param[2] = element;
//   return param;
// }
// console.log(changeSecondElement([3, 2, 1, 0], 4));

//5
// function addNewElement(param, element) {
//   param.push(element);
//   return param;
// }
// console.log(addNewElement([3, 2, 1, 0], -1));

//6
// function deleteLastElement(param) {
//   param.pop();
//   return param;
// }
// console.log(deleteLastElement([3, 2, 1, 0]));

//7
// function deleteLastElement(param) {
//   return param.length;
// }
// console.log(deleteLastElement([1, 2, 3, 4, 5]));

//8
// function addFirstElement(param, element) {
//   param.unshift(element);
//   return param;
// }
// console.log(addFirstElement([3, 2, 1, 0], 4));

//9
// function deleteFirstElement(param) {
//   param.shift();
//   return param;
// }
// console.log(deleteFirstElement([0, 1, 2, 3, 4]));

//10
// function addMassiv(param1, param2) {
//   let result = param1.concat(param2);
//   return result;
// }
// console.log(addMassiv([-3, -2, -1], [0, 1, 2]));
//
//
//
//
//20
// let resurs = ["wood", "stone", "iron", "gold", "diamond"];
// function repeatTwoTimes(param) {
//   for (let i = 0; i < param.length; i++) {
//     console.log(param[i]);
//     console.log(param[i]);
//   }
//   return param;
// }
// console.log(repeatTwoTimes(resurs));

//21
// let numbers = [3, 4, 2, 5, 1, 9, 6, 10, 7, 8];
// function searchBigElement(param) {
//   param.sort(function (a, b) {
//     return a - b;
//   });
//   let result = param[param.length - 1];
//   return result;
// }
// console.log(searchBigElement(numbers));

//22
// let numbers = [3, 4, 2, 5, 1, 9, 6, 10, 7, 8];
// function searchBigElement(param) {
//   param.sort(function (a, b) {
//     return a - b;
//   });
//   return param[0];
// }
// console.log(searchBigElement(numbers));

//23
// let numbers = [1, 2, 3, 4];
// function searchMidleResult(param) {
//   let sum = 0;
//   for (let i = 0; i < param.length; i++) {
//     sum = param[i] + sum;
//   }
//   let result = sum / 2;
//   return result;
// }
// console.log(searchMidleResult(numbers));
