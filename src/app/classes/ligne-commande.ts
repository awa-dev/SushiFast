// la classe contient les informations retournées par une requête.

export class LigneCommande {
    constructor(
        public id: number,
        public nomPlateau: String,
        public quantite: number,
        public prix: number
        
    )
    {}
   
}



