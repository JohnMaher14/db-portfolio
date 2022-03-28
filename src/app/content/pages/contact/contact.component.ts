import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BannerImage } from 'src/app/classes/banner-image';
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
  thankyou = false;
  banner!: BannerImage;
  constructor(
    private _BannerService:BannerService,
    private _ContactService:ContactService,
    private _Router:Router,
    private _Title:Title
    ) { 
      _Title.setTitle('Digital Bond | Contact us')

    }
  showContactbanner(){
    this.loading = true ;

    this._BannerService.getBanner().subscribe(
      (response)=> {
        this.banner = response.bannerImages[0];
        this.loading = false;
      }
    )
  }
  contactForm:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required) ,
    'email': new FormControl('',[Validators.required , Validators.email]),
    'subject': new FormControl('',Validators.required),
    'type': new FormControl('message'),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
    'message': new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.showContactbanner()
  }




  onSubmit(contactForm:FormGroup){
    this.loadingSpinner = true;
    this._ContactService.addMessage(contactForm.value).subscribe(
      (response) => {
        this.loadingSpinner = false;
        if(response.success){

          this.thankyou = true
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
