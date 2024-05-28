import {Component, OnInit} from '@angular/core';
import {HebergementServiceService} from "../service/hebergement-service.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.css']
})
export class HebergementComponent implements OnInit{


  public hebergements:any;
  public hebergementimage:any;
  constructor(public hebergementService:HebergementServiceService,private route: ActivatedRoute, private router: Router) {
  }
    ngOnInit() {

      this.hebergementService.getHebergement().subscribe(
        data=>{
          this.hebergements=data
        },err=>{
          console.log(err)
        }
      )
    }


  handledeletecustomer(h: any) {
    let conf= confirm("Are you Sure !")
    if(!conf)return;
    this.hebergementService.deleteHebergement(h.id).subscribe({
      next:data=>{
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
      },error:err => {
        console.log(err);
      }
    })

  }
}
