"use strict"

// IMPORTE LE MODULE "ANSIColours"
import ANSIColours from'./lib/ANSIColours.js';
let AC = new ANSIColours();

// IMPORTE LE MODULE "Mere"
import Mere from './lib/Mere.js';
import Pays from './lib/Pays.js;';

// IMPORTE LE MODULE "Fille"
import Fille from'./lib/Fille.js';
import France from'./lib/France.js';
import Nicaragua from'./lib/Nicaragua.js';


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




let Pays = new Pays();

let France = new Pays('Paris', '672 051 km2', '68 014 000', 'euros', 'Français');
console.log(this.capitale);
console.log(this.superficieTotal);
console.log(this.nbHabitant);
console.log(this.monnaie);
console.log(this.langues);

let Nicaragua = new Pays('Nanagua', '129 494 km2', '6 203 441', 'córdoba oro', 'Espagnol');
console.log(this.capitale);
console.log(this.superficieTotal);
console.log(this.nbHabitant);
console.log(this.monnaie);
console.log(this.langues);
