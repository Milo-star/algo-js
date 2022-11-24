function moyenne(array_moyen){
    let moyen = 0;
    for (let x = 0; x < array_moyen.length; x++)
    moyen += array_moyen[x];
    moyen /= array_moyen.length;
    return moyen;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
console.log(moyenne(array1));
console.log(moyenne(array2));