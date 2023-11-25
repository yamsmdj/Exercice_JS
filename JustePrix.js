// let justePrix = 26
// let motUtilisateur = prompt("Entrez un nombre : ")

// while (justePrix != motUtilisateur ){
//     if (motUtilisateur < justePrix){
//         alert("trop petit, Rentez votre chance : ")
//     }else {
//         alert("trop grand, Rentez votre chance : ") 
//     }
//     motUtilisateur= prompt("retentez :")
// }
// if (justePrix == motUtilisateur) {
//     alert("gagné")
// }


/////////////////////////////////////////////////////////Prix Aleatoire/////////////////////////////////////////////////////////////


number= Math.ceil(Math.random()*100) +1
let user = Number(prompt("Devine le nombre : "))

while (user != number) {
    for (let i = 0; i <= 3; i++) {        
    if (user > number) {
        alert("trop grand")
    }else{
        alert("trop petit")
    }
   user = prompt ("recommence")

if (user == number) {
    alert("gagné! le chiffre est bien " + number)

    
}
}}

if (number == user) {
    prompt("gg tu as reussi a trouver le chiffre en " + i + "essaie" )
 } else{
    alert("Tu as échouer, t'es " + i + "sont atteint")
    }

