
function randomizeCast(tvSerie){
    list_cast=tvSerie["Cast_members"]
    l=list_cast.length
    randomlist=[]
    for( i=1;i<=l;i++){
        random=Math.floor(Math.random()*l);
        while (randomlist.includes(list_cast[random])){
            random=Math.floor(Math.random()*l);
        }
        randomlist.push(list_cast[random]);
    }
    return randomlist   
    
}

function newcast(){
    tvSerie=askTvSerie()
    newcast_list=randomizeCast(tvSerie)
    return "Le casting de votre prochaine série sera"+" "+ newcast_list
}

console.log(newcast())

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