import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HebergementServiceService} from "../service/hebergement-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Hebergement} from "../hebergementModel";

@Component({
  selector: 'app-updatehebergement',
  templateUrl: './updatehebergement.component.html',
  styleUrls: ['./updatehebergement.component.css']
})
export class UpdatehebergementComponent implements OnInit{
  editHebergementForm!: FormGroup;
  categorie!:any;
  ville!:any;
  IDhebergement!: number;
  currentImage!:any;
constructor(  private http: HttpClient,
              protected fb: FormBuilder,
              private hebergementservice: HebergementServiceService,
              private router: Router,
              private route: ActivatedRoute) {
}
    ngOnInit() {
      this.route.params.subscribe(params=>{
        this.IDhebergement= +params['id'];
      this.editHebergementForm=this.fb.group({
        id:this.IDhebergement,
        nom: [''],
        image: [''],
        prix: [''],
        capacite: [''],
        chambre: [''],
        sallesdebains: [''],
        placesdestationnement: [''],
        etage: [''],
        description: [''],


      });
      })




    }

  handleUpdateHebergement() {

    let hebergemet:Hebergement=this.editHebergementForm.value;
    if (!hebergemet.image) {

      hebergemet.image = this.currentImage;
    }
    console.log('Hebergement object:', hebergemet);
    this.hebergementservice.UpdateHebergement(hebergemet).subscribe({

      next:data=>{

        alert("Hébergement mis à jour avec succès")
        this.router.navigate(['/hebergement']);

      },error:err=>{

        console.log(err);
      }

    })

  }
}

