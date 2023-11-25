let listemots = [ "Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !" ,"La vie, l’univers et le reste","Merci pour le poisson"]
let score = 0
let motUtilisateur = prompt()

let choix = prompt("Avec quel listes desirez vous jouer : 'mots' ou 'phrase' ? ")
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt('Avec quel listes desirez vous jouer : "mots" ou "phrase" ? ')
}

if (choix === "mots") {
    for (let i = 0; i < listemots.length; i++) {
       motUtilisateur = prompt("Entrez le mot : " + listemots[1] )
       if (motUtilisateur === listemots[0]){
        score++
       }}
}
else{
    for (let i = 0; i < listePhrases.length; i++) {

         phraseUser = prompt("Entrez le mot : " + listePhrases[0] )
        if (motUtilisateur === listePhrases[0]) {
            score++
        }}
}


// const listeMots = ["Cachalot", "Pétunia", "Serviette"]
// const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

// let score = 0

// // Déclaration de la variable contenant le choix de l'utilisateur
// let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
// while (choix !== "mots" && choix !== "phrases") {
//     choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// }

// if (choix === "mots") {
//     // On parcourt le tableau des mots
//     for (let i = 0; i < listeMots.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
//         if (motUtilisateur === listeMots[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listeMots.length)
// } else {
//     // On parcourt le tableau des phrases
//     for (let i = 0; i < listePhrases.length; i++) {
//         // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
//         let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
//         if (phraseUtilisateur === listePhrases[i]) {
//             // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listePhrases.length)
// }


    // if (motUtilisateur === listemots[0]) {
    //     score++
    // } 
    // motUtilisateur = prompt("Entrez le mot : " + listemots[1] )
    
    // if (motUtilisateur === listemots[1] ) {
    //     score++
    // } 
    // motUtilisateur = prompt("Entrez le mot : " + listemots[2])
    //  if (motUtilisateur === listemots[2] ) {
    //     score++
    //  }

    //  listePhrases ["Pas de panique ! ","La vie, l’univers et le reste","Merci pour le poisson"  ]

    //  console.log("votre score est de " + score +" sur 3")

































    
//     switch (motUtilisateur) {
//         case listemots[0]:
//             alert("gg")
//             score++
//             break;
//         case listemots[1]:
//             alert("gg")
//             break;
//         case listemots [2]:
//             alert("gg")
//         break

//         default:
//             prompt("Non c'est pas sa!")
//             break;
//     }


// console.log("votre score est de " + score +" sur 3")









// for (let i = 0; i < listemots.length; i++) {
//     while (motUtilisateur != `$listemots[0]`)
//     switch (motUtilisateur = prompt("Entrez le mot : "+ listemots[0])) {
//         case listemots[0]:
//             alert("gg")
//             break;
//         default:
//             alert("re-essaie")
//             break;
//     }; 
// }















