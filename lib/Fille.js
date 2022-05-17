"use strict"

// IMPORTE LE MODULE "Mere"
import Mere from'./Mere.js';

/**
 * Classe Fille, elle hérite de la classe Mere
 */
export default class Fille extends Mere {

    /**
     * Créer une instance de classe Fille
     * 
     * @param {number} height Taille en cm
     * @param {string} eyesColour Couleur des yeux
     * @param {string} hairColour Couleur des cheveux
     * @param {string} distinctSign Signe distinctif que la classe Mere n'a pas
     */    
    constructor(height, eyesColour, hairColour, distinctSign){

        // LA CLASSE FILLE SE CONTENTE D'APPELER LE CONSTRUCTEUR DE LA CLASSE MERE
        // EN LUI DONNANT LES PROPRIÉTÉS QU'ELLE ATTEND
        // DONC, LE DÉVELOPPEUR N'A PAS À SE RETAPER LE CODE
        // QU'IL A DÉJÀ IMPLÉMENTER DANS LA CLASSE MÈRE
        super(height, eyesColour, hairColour);

        // PUIS, LA CLASSE FILLE PEUT GÉRER LES ARGUMENTS QUI LUI SONT PROPRES
        // SES PROPRIÉTÉS N'EXISTENT PAS DANS LA CLASSE MERE, SEULEMENT ICI, CHEZ LA FILLE
        this.distinctSign = distinctSign;
    }
}