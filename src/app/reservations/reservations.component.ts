import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HebergementServiceService} from "../service/hebergement-service.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  public reservation!:any;
  constructor(private http:HttpClient,private hebergementservice:HebergementServiceService) {
  }
    ngOnInit() {
    this.hebergementservice.getreservation().subscribe({
      next:data=>{
        this.reservation=data;
      },error:err => {
        console.log(err);
      }

    })

    }
  calculateDaysDifference(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = end.getTime() - start.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
  }

  protected readonly HttpHeaders = HttpHeaders;
}
