import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HebergementServiceService} from "../service/hebergement-service.service";
import {Hebergement} from "../hebergementModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouterhebergement',
  templateUrl: './ajouterhebergement.component.html',
  styleUrls: ['./ajouterhebergement.component.css']
})
export class AjouterhebergementComponent implements OnInit{
  addHebergementForm!:FormGroup;
  categorie!:any;
  ville!:any;


  constructor(private http:HttpClient,private fb:FormBuilder,private hebergementservice:HebergementServiceService,private  route:Router) {
  }

    ngOnInit() {


      this.addHebergementForm=this.fb.group({
          nom :this.fb.control(null),
          image:this.fb.control(null),
          prix:this.fb.control(null),
          description:this.fb.control(null),
          capacite:this.fb.control(null),
          chambre:this.fb.control(null),
          sallesdebains:this.fb.control(null),
          placesdestationnement:this.fb.control(null),
          etage:this.fb.control(null),
          categorie: this.fb.control(null),
           ville:this.fb.control(null)



        })
      this.hebergementservice.getCategories().subscribe({
        next:data=>{
          this.categorie=data;
        },error:err => {
          console.log(err);
        }
      })

      this.hebergementservice.getvilles().subscribe({
        next:data=>{
          this.ville=data;
        },error:err => {

          console.log(err)
        }
      })

    }



  handleaddHebergement() {


    let hebergemet:Hebergement=this.addHebergementForm.value;
        hebergemet.categorie = { id: this.addHebergementForm.value.categorie };
        hebergemet.ville={ id: this.addHebergementForm.value.ville ,adresse: "Some address"};
      this.hebergementservice.addhebergement(hebergemet).subscribe({

        next:data=>{

          alert("hebergement added successfully")
          this.route.navigate(['/hebergement']);


        },error:err=>{

          console.log(err);
        }

      })


    console.log(this.addHebergementForm.value)
  }
}
