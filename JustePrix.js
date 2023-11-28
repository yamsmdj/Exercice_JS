/////////////////////////////////////////////////////////Nombre mystere/////////////////////////////////////////////////////////////

// let justePrix = 26
// let motUtilisateur = prompt("Entrez un nombre : ")

// while (justePrix != motUtilisateur ){
//     if (motUtilisateur < justePrix){
//         alert(""Le nombre mystere est plus petit , Rentez votre chance : ")
//     }else {
//         alert("Le nombre mystere est plus grand, Rentez votre chance : ") 
//     }
//     motUtilisateur= prompt("Retente :")
// }
// if (justePrix == motUtilisateur) {
//     alert("gagné")
// }


/////////////////////////////////////////////////////////Nombre mystere Aleatoire/////////////////////////////////////////////////////////////


// number= Math.round(Math.random()*100) +1
// let user = Number(prompt("Devine le nombre : "))
// essaie = 0

// for (let i = 0; i < 5; i++) {
//     while (user != number) {
//         if (essaie == 5) {
//             alert('perdu')
//             console.log("perdu ! tu as atteint t'es " + essaie + "essaie")
//             break
//             }
//         if(user > number)  {
//             user=alert("Le nombre mystere est plus petit ! ATTENTION, il te reste " + (5 - essaie) +" chance")
//         }else {
//          user= alert("Le nombre mystere est plus grand ! ATTENTION, il te reste " + (5 - essaie) +" chance")
//         }
//         essaie++
//         user = prompt ("Retente : ")
//         }
// }
//     if (user == number) {
//         alert("Bravo ! tu as reussi a trouver le chiffre en " + essaie + " essaie")
//     }


    
/////////////////////////////////////////////////////////Nombre mystere Aleatoire avec une fourchette de prix adaptable/////////////////////////////////////////////////////////////


number= Math.round(Math.random()*100) +1
let user = Number(prompt("Devine le nombre entre 0 et 100 : "))
essaie = 0

for (let i = 0; i < 5; i++) {
    while (user != number) {
        if (essaie == 5) {
            alert('perdu le nombre mystere etait : ' + number)
            console.log("Trop nul ! tu as atteint t'es " + essaie + "essaie")
            break
            }
        if(user > number)  {
            user=alert("Le nombre  est plus petit !  il te reste " + (5 - essaie) +" chance")
        }else {
         user= alert("Le nombre  est plus grand !  il te reste " + (5 - essaie) +" chance")
        }
        essaie++
        user = prompt ("recommence")
        }}
    if (user == number) {
        alert("Bravo ! tu as reussi a trouver le chiffre en " + essaie + " essaie")
    }
