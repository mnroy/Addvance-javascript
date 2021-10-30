// square
const number = [3, 4, 5, 6, 7, 8, 9];
const outPut = [];
for(let i = 0; i < number.length; i++){
    const eliment = number[i];
    const result = eliment * eliment;
    outPut.push(result);
}
console.log(outPut);

// next 

const num = [9, 4, 3, 2, 6, 7];

// const result = num.map(function(eliment){
//     return eliment * eliment;
// })
// console.log(result);
const result = num.map(x => x * x);
console.log(result);

const dobulIt =[3, 4, 5, 6];
const result2 = dobulIt.map(x => x * 2);
console.log(result2);

// filter js

const numbers = [9, 3, 2, 1, 5, 10];

const result3 = numbers.filter(x => x > 4);
console.log(result3);

// find js

const isThere = [33, 55, 66, 77];

const result4 = isThere.find(x => x > 50);
console.log(result4);