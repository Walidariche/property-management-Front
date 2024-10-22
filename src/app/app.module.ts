import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HebergementComponent } from './hebergement/hebergement.component';

import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HebergementdetailsComponent } from './hebergementdetails/hebergementdetails.component';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";
import { ReserverComponent } from './reserver/reserver.component';
import { AjouterhebergementComponent } from './ajouterhebergement/ajouterhebergement.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { UpdatehebergementComponent } from './updatehebergement/updatehebergement.component';


@NgModule({
  declarations: [
    AppComponent,
    HebergementComponent,

    ContactComponent,
    HebergementdetailsComponent,
    HomeComponent,

    ReserverComponent,
     AjouterhebergementComponent,
     ReservationsComponent,
     UpdatehebergementComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        ReactiveFormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
