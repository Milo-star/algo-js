
function sum (array_num){
    let sum = 0;
    for (let x = 0; x < array_num.length; x++)
    sum += array_num[x]
    return sum
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

console.log(sum(array1));
console.log(sum(array2));