let petit = prompt("Entrer un nombre minimum");
let grand = prompt("Entrer un nombre maximum");
let current = prompt("Entrer un nouveau nombre.");

if (petit > grand) {
    
    console.log("Je pense que tu n'as pas compris, Ciao.");

} else {
    if ( petit <= current <= grand ) {

        console.log(current + " est entre " + petit + " et " + grand);
     
    }   else {
            console.log(current + " n'est pas entre " + petit + " et " + grand);
        }
}