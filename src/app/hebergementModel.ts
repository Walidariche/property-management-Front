
export interface Hebergement {
  id:          number;
  nom:         string;
  image:       string;
  description: string;
  prix:        number;
  capacite:    number;
  chambre:     number;
  sallesdebains:number,
  placesdestationnement:number,
  etage:number,


  categorie:   Categorie;
  ville:       Ville;
}

export interface Categorie {
  id:   number;
  type?: string;
}

export interface Ville {
  nomVille?: string;
  adresse:  string;
  id:       number;
}
