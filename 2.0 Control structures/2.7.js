let n = parseInt(prompt("Entrer un nombre"));
let sum = 0; 

let i = 0;
while (i < n){
   let newNumber = parseInt(prompt("Entrer un nombre " + `${i+1}`));
   sum += newNumber;
   i++;
}