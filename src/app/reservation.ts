import {Categorie, Ville} from "./hebergementModel";

export interface Reservation{

  date_debut:Date;
  date_fin:Date;
  hebergement:number;
  nom:string;
  email:String;
  telephone:String;
  montant:number;
  date_reservation:Date;

}


export interface hebergement {
  id:          number;
  nom:         string;
  image:       string;
  description: string;
  prix:        number;
  capacite:    number;
  sallesdebains:number;
  categorie:   Categorie;
  ville:       Ville;
}
