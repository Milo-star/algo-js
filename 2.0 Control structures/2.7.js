let n = parseInt(prompt("Entrer un nombre"));
let p = 0; 

let i = 0;
while (i < n){
   let newNumber = parseInt(prompt("Entrer un nombre " + `${i+1}`));
   p += newNumber;
   i++;
}

console.log(p);