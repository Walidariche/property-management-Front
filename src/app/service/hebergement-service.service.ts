import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReserverComponent} from "../reserver/reserver.component";
import {Reservation} from "../reservation";
import {Hebergement} from "../hebergementModel";
import {EnvoiEmail} from "../EnvoiMessage";

@Injectable({
  providedIn: 'root'
})
export class HebergementServiceService {

  public host:String="http://localhost:8085"

  constructor(private  http:HttpClient) { }



  public getHebergement(page:number,size:number):Observable<any>{

    return  this.http.get(`${this.host}/hebergements?page=${page}&size=${size}`);
  }


    public reservation(reservation:Reservation):Observable<Reservation>{

    return this.http.post<Reservation> (this.host+"/Reservation",reservation);
  }

  public addhebergement(hebergement:Hebergement):Observable<Hebergement>{

    return  this.http.post<Hebergement>(this.host+"/AddHebergement",hebergement);
  }

  public getCategories(){
    return this.http.get(this.host+"/categories");
  }


  public getvilles(){
    return this.http.get(this.host+"/villes");
  }
  public deleteHebergement(Id:number){
    return this.http.delete(this.host+"/deleteHebergement/"+Id);
  }

  public getreservation(page:number,size:number):Observable<any>{
   return  this.http.get(`${this.host}/AllReservations?page=${page}&size=${size}`);
  }

  public UpdateHebergement(hebergement:Hebergement):Observable<Hebergement>{
    return this.http.put<Hebergement>(this.host+"/updateHebergement",hebergement);
  }

  public envoiMessage(envoiEmail:EnvoiEmail):Observable<EnvoiEmail>{

    return this.http.post<EnvoiEmail>(this.host+"/EnvoiEmail",envoiEmail)
  }

}

