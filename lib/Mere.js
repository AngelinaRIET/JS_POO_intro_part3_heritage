"use strict"

/**
 * Classe Mere dont va hériter la class Fille
 */
export default class Mere {

    /**
     * Créer une instance de classe Mere
     * 
     * @param {number} height Taille en cm
     * @param {string} eyesColour Couleur des yeux
     * @param {string} hairColour Couleur des cheveux
     */
    constructor(height, eyesColour, hairColour){

        // 1 - PROPRIÉTÉS GÉNÉRIQUES FORCÉES
        // ELLE SONT DÉFINIES PAR LA CLASSE MÈRE, 
        // ET SERONT UTILISÉES PAR TOUTES LES CLASSES ENFANTS
        // UNE CLASSE FILLE POURRAIT LES MODIFIER, MAIS, LE PLUS SOUVENT, LORSQUE L'ON FAIT CELA
        // C'EST QUE LA DONNÉE EST ENTIÈREMENT GÉRER AUTOMATIQUEMENT PAR LA MÈRE, ET QUE LA FILLE NE DEVRAIT PAS Y TOUCHER
        this.nbLegs = 2;
        this.nbArms = 2;
        // ICI : ON A OUBLIÉ LE NOMBRE D'YEUX

        // 2 - PROPRIÉTÉS COMMUNES
        // CES PROPRIÉTÉS EXISTENT POUR TOUT LE MONDE, 
        // MAIS CHAQUE NOUVELLE INSTANCE DOIT POUVOIR LES PRÉCISER LORS DU NEW
        this.height     = height;
        this.eyesColour = eyesColour;
        this.hairColour = hairColour;
    }
}