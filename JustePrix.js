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


number= Math.round(Math.random()*100) +1
let user = Number(prompt("Devine le nombre : "))
essaie = 0

for (let i = 0; i < 5; i++) {
    while (user != number) {
        if (essaie == 5) {
            alert('perdu')
            console.log("perdu ! tu as atteint t'es " + essaie + "essaie")
            break
            }
        if(user > number)  {
            user=alert("trop grand")
        }else {
         user= alert("trop petit")
        }
        essaie++
        console.log(essaie, number)
        user = prompt ("recommence")
        }
}
    if (user == number) {
        alert("gg tu as reussi a trouver le chiffre en " + essaie + " essaie")
    }