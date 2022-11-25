let nombres = parseInt(prompt("Svp, choisis un nombre"));

function rand10(){
    let randomnbr = (Math.floor(Math.random() * (10 - 1 + 1) + 1));
    return randomnbr;

}

function multiRand(n){

    const arrayNumbers = [];

    let i = 0

    while (i < n){
        let nbrrandom = rand10();
        arrayNumbers.push(nbrrandom);
        i++;
    }
    return arrayNumbers;
}

console.log(multiRand(nombres));