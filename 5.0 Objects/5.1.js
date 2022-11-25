function askTvSerie(){
    Name=prompt("Quel est le nom de votre série préférée")
    annee=prompt("En quelle année la série a été produite")
    membres=[]
    x=prompt("Quel est le nom d'un membre de la distribution")
    membres.push(x)
    while (x!=""){
        x=prompt("Quel est le nom d'un autre membre de la distribution (appuyez sur Entrée si vous avez terminé")
        membres.push(x)
    }
    membres.pop()
    let TvSerie={
        "Name":Name,
        "Production_year": annee,
        "Cast_members":membres
        }
    return TvSerie
}

console.log(JSON.stringify(askTvSerie()))