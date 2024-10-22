import {Component, OnInit} from '@angular/core';
import {HebergementServiceService} from "../service/hebergement-service.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {ActivatedRoute, Router} from "@angular/router";
import { HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.css']
})
export class HebergementComponent implements OnInit{


  public hebergements:any;
  public Categories:any;
  public hebergementimage:any;
  public currentPage: number = 0;
  public pageSize: number = 6;
  public pagination: any = { pages: [] };

  constructor(public hebergementService:HebergementServiceService,private route: ActivatedRoute, private router: Router) {
  }
    ngOnInit() {
     
        this.hebergementService.getCategories().subscribe(
          data=>{
            this.Categories=data
          },err=>{
            console.log(err)
          }
        )
  
  
      
     // this.Categories = [
       // { Categories: 'Villa' },
      //  { Categories: 'Maison' },
      //  { Categories: 'Riad' }
      //];
      this.loadPage(this.currentPage);
    }


    

      loadPage(page: number) {
      this.hebergementService.getHebergement(page,this.pageSize).subscribe(
        data=>{
          this.hebergements=data.content
          this.setupPagination(data.totalPages);
        },err=>{
          console.log(err)
        }
      )
    }
  setupPagination(totalPages: number) {
    this.pagination.pages = Array(totalPages).fill(0).map((x, i) => i);
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
  protected readonly HttpHeaders = HttpHeaders;

}
