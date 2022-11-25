let largeur = parseInt(prompt("Donne la largeur de votre rectangle"));
let longueur = parseInt(prompt("Donne la longueur de votre rectangle"));

function calcSurface(a, b){
    return a*b;
}

console.log(calcSurface(largeur, longueur))