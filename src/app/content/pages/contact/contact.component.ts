import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BannerService } from 'src/app/services/banner.service';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loading= true;
  error ='';
  loadingSpinner = false;
  banners: any[] =[];
  constructor(
    private _BannerService:BannerService,
    private _ContactService:ContactService,
    private _Router:Router
    
    ) { }
  showContactbanner(){
    this._BannerService.getBanner().subscribe(
      (response)=> {
        this.banners = response.bannerImages;
        this.loading = false;
      } 
    )
  }
  contactForm:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required) ,
    'email': new FormControl('',[Validators.required , Validators.email]),
    'subject': new FormControl('',Validators.required),
    'type': new FormControl('message'),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^(0|[1-9][0-9]*)$/)]),
    'message': new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.showContactbanner()
  }




  onSubmit(contactForm:FormGroup){
    this.loadingSpinner = true;
    this._ContactService.addMessage(contactForm.value).subscribe(
      (response) => {
        if(response.success){
          this.loadingSpinner = false;

          this._Router.navigate(['/thankyou-contact'])
        }
        
      }, error => {

        this.loadingSpinner = false;
        if (error.error) {

          this.error = error
        }

      }
    )

  }
}
