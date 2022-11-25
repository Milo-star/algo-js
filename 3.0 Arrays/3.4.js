const firstArray = ["chat", "chien", "licorne"];
const doublearray = [];

for (let elem of firstArray){
    doublearray.push(elem);
}
console.log(doublearray);


const doublearrayDeux = Array.from(firstArray);

console.log(doublearrayDeux);