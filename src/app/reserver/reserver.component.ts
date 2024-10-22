import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HebergementServiceService} from "../service/hebergement-service.service";
import {Reservation} from "../reservation";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit{

  reservationFormgroup!:FormGroup;
  IDhebergement!: number;
  montant!: number;
  date_debut!: Date;
  date_fin!: Date;
  diffrent!: number;
  isReservationVisible!:boolean;
  datereservation!:Date;
  prix!:number;



  constructor(private fb:FormBuilder,
              private hebergementservice:HebergementServiceService,private router:Router,
              private route:ActivatedRoute
  ) {}

    ngOnInit() {
        this.route.params.subscribe(params=>{
          this.IDhebergement= +params['id'];

        this.reservationFormgroup=this.fb.group({
          date_debut:this.fb.control(null),
          date_fin:this.fb.control(null),
          hebergement:  {"id": this.IDhebergement}  ,
          nom:this.fb.control(null),
          email:this.fb.control(null),
          telephone:this.fb.control(null),


        });
        });
    }

  handlereservation() {


    let reservation:Reservation=this.reservationFormgroup.value;
    this.hebergementservice.reservation(reservation).subscribe({
       next:data=>{

         this.isReservationVisible=true;
         this.montant = data.montant;
         this.date_debut = new Date(data.date_debut);
         this.date_fin = new Date(data.date_fin);
         this.datereservation=data.date_reservation;
         this.diffrent=this.calculateDaysDifference(this.date_debut,this.date_fin);

         this.reservationFormgroup.reset();

       },error:err=>{
         console.log(err);
      }

    })


  }

  calculateDaysDifference(startDate: Date, endDate: Date): number {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return Math.ceil(daysDiff);
  }
  protected readonly console = console;

  showReservationDetails() {
    this.isReservationVisible=true;
  }
}
