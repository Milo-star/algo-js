const eleveBecode = [ 
    "Arno Volts" ,
    "Aurélien Mariaule",
    "Aurore Lemaire",
    "Benjamin Porsont",
    "Céline Verreydt",
    "Corentin Miserque",
    "Dominique Coppée",
    "Edouard de Romrée de Vichenet",
    "Hugo Goorickx ",
    "Jofrey Houyoux",
    "Jonathan Manes",
    "jonathan bajoux",
    "Laura Wilhelmi",
    "Lysie Soyez",
    "Marnie Benalia",
    "Mathilde Cornelis",
    "Milo Bonnet",
    "Nadim El Nakadi",
    "Nathalie Vanden Abeele",
    "Nathalie Goffette",
    "Nour Everaert",
    "Pierre Mauriello",
    "Quentin Bource ",
    "Virginie Dourson"
];


function pickLearner(inputAr, n){
    let l = inputAr.length
    let arr = []
    for (i=0; i<n; i++){
        let random = Math.floor(Math.random()*(l));
        while (arr.includes(inputAr[random])){
            let random = Math.floor(Math.random()*(l));
        }
        arr.push(inputAr[random])
    }
    return arr
}

console.log(pickLearner(eleveBecode, 5))