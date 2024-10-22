import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HebergementComponent} from "./hebergement/hebergement.component";
import {ContactComponent} from "./contact/contact.component";
import {HebergementdetailsComponent} from "./hebergementdetails/hebergementdetails.component";
import {HomeComponent} from "./home/home.component";

import {ReserverComponent} from "./reserver/reserver.component";
import {AjouterhebergementComponent} from "./ajouterhebergement/ajouterhebergement.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {UpdatehebergementComponent} from "./updatehebergement/updatehebergement.component";


const routes: Routes = [
  {path:"hebergement",component:HebergementComponent},
  {path:"contact",component:ContactComponent},
  {path:"hebergementdetails",component:HebergementdetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:'reserver/:id',component:ReserverComponent },
  {path:'ajouterHebergement',component:AjouterhebergementComponent },
  {path:'reservations',component:ReservationsComponent},
  {path:'update/:id',component:UpdatehebergementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
