/**
 * Objectif du TD :
 * --------------
 * Comprendre le principe des callback.
 * 
 * Un callback est une fonction passée en paramètre à une autre fonction et appelée
 * à l'intérieur de cette autre fonction.
 * 
 * 
 * Instructions :
 * -----------
 * # - 1
 * Ecrire une fonction principale qui retournera la liste des joueurs agés de plus de 20 ans.
 * 
 * Cette fonction prendra en paramètre le tableau des joueurs ainsi qu'un callback.
 * 
 * Pour chaque ligne du tableau des joueurs, cette fonction principale devra appeler le callback
 * en passant le joueur en paramètre et constituer la liste des joueurs filtrée en fonction du retour
 * du callback.
 * 
 * # - 2
 * La fonction callback prendra un joueur en paramètre et retournera
 * un booléen indiquant si le joueur a plus de 20 ans.
 * 
 * # - 3
 * Appeler votre fonction principale avec les paramètres appropriés
 * et afficher son résultat dans la console.
 * 
 * 
 * Astuce :
 * -----
 * Pour tester votre code, taper dans la console :
 * $ node td-callback.js`
 * 
 */
const players = [
  { firstName: 'Paul', lastName: 'Pogba', age: 25 },
  { firstName: 'Kylian', lastName: 'Mbappé', age: 19 },
  { firstName: 'Antoine', lastName: 'Griezmann', age: 27 },
  { firstName: 'Samuel', lastName: 'Umtiti', age: 24 },
]

/**
 * Filtre une liste de joueurs.
 * 
 * @param {*} players Liste des joueurs à filtrer
 * @param {*} cb Callback retournant un booléen indiquant si le joueur doit être filtré ou non
 */
function filterPlayers(players, cb) {
  let filteredPlayers = [];
  for (let player of players) {
/*     if (cb(player) == true){
      filteredPlayers.push(player)
    } */
    cb(player) && (filteredPlayers.push(player))
  }
  return filteredPlayers;
}

// identique à cb(player) mais plus optimisé
// function cb(player){
//  return (player.age > 20)
//}
const cb = player => player.age > 20

console.log(filterPlayers(players, cb))

console.log(filterPlayers(players, player => player.firstName.startsWith('P')))
