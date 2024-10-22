import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HebergementServiceService} from "../service/hebergement-service.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  public reservation: any[] = [];
  public currentPage: number = 0;
  public pageSize: number =6;
  public pagination: any = { pages: [] };


  constructor(private http:HttpClient,private hebergementservice:HebergementServiceService) {}
    ngOnInit() {

      this.loadPage(this.currentPage);
    }
  loadPage(page: number) {
    this.hebergementservice.getreservation(page, this.pageSize).subscribe({
      next:data=>{
        this.reservation=data.content;
        this.setupPagination(data.totalPages);
      },error:err => {
        console.log(err);
      }

    })
}
  setupPagination(totalPages: number) {
    this.pagination.pages = Array(totalPages).fill(0).map((x, i) => i);
  }
  calculateDaysDifference(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = end.getTime() - start.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
  }


  protected readonly HttpHeaders = HttpHeaders;
}
