import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HebergementServiceService} from "../service/hebergement-service.service";
import {Router} from "@angular/router";
import {EnvoiEmail} from "../EnvoiMessage";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
   contactFormGroup!:FormGroup;

  constructor(private http:HttpClient,
              protected fb:FormBuilder,
              private hebergementservice: HebergementServiceService,
              private router: Router ) {
  }

  ngOnInit(): void {

    this.contactFormGroup=this.fb.group({

      toemail:this.fb.control(null),
      subject:this.fb.control(null),
      body:this.fb.control(null),

    })
  }

  handleContact() {
 let EnvoiMessage:EnvoiEmail=this.contactFormGroup.value;

 this.hebergementservice.envoiMessage(EnvoiMessage).subscribe({

   next:data=>{
     alert("Message envoi  successfully")
     this.contactFormGroup.reset();

   },error:err => {
     console.log(err);
   }
 })

  }
}
