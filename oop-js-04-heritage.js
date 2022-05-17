"use strict"

// IMPORTE LE MODULE "ANSIColours"
import ANSIColours from'./lib/ANSIColours.js';
let AC = new ANSIColours();

// IMPORTE LE MODULE "Mere"
import Mere from './lib/Mere.js';

// IMPORTE LE MODULE "Fille"
import Fille from'./lib/Fille.js';


console.log();

let mere = new Mere();
console.log(AC.BG_BLUE + 'La mère (sans arguments) :' + AC.RESET);
console.log('Code : ' + AC.YELLOW + 'let mere = new Mere();' + AC.RESET);
console.log(mere);
console.log();

let fille1 = new Fille();
console.log(AC.BG_BLUE + 'Première fille (sans arguments) :' + AC.RESET);
console.log('Code : ' + AC.YELLOW + 'let fille1 = new Fille();' + AC.RESET);
console.log(fille1);
console.log();

let fille2 = new Fille(165, 'brown', 'black');
console.log(AC.BG_BLUE + 'Deuxième fille (avec arguments hérités) :' + AC.RESET);
console.log('Code : ' + AC.YELLOW + 'let fille2 = new Fille(165, \'brown\', \'black\');' + AC.RESET);
console.log(fille2);
console.log();

let fille3 = new Fille(169, 'brown', 'red', 'tâches de rousseur');
console.log(AC.BG_BLUE + 'Troisième fille (avec arguments hérités et propres) :' + AC.RESET);
console.log('Code : ' + AC.YELLOW + 'let fille3 = new Fille(169, \'brown\', \'red\', \'tâches de rousseur\');' + AC.RESET);
console.log(fille3);
console.log();
