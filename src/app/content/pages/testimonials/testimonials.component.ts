import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerService } from 'src/app/services/banner.service';
import { HomeService } from 'src/app/services/home.service';
import { ReviewsService } from 'src/app/services/reviews.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  loading = true;
  loadingSpinner = false;
  reviews: any[] =[];
  error = '';
  banners: any[]=[];
  reviewImage='https://digitalbondmena.com/feedbacks/';
  constructor(
    private _BannerService:BannerService ,
     private _HomeService:HomeService  ,
     private _ReviewsService:ReviewsService ,
      private _Router:Router) { }
  testimonialForm:FormGroup = new FormGroup({
    name: new FormControl('',Validators.required) ,
    email: new FormControl('',[Validators.required , Validators.email]),
    job_title: new FormControl('',Validators.required),
    type: new FormControl('review',Validators.required),
    phone: new FormControl('', [Validators.required , Validators.pattern(/^(0|[0-9][1-9]*)$/)]),
    message: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.showbanner();
    this.showReviews()
  }
  showbanner(){
      this._BannerService.getBanner().subscribe(
        (response)=> {
          this.banners = response.bannerImages;
          this.loading = false;
        } 
      )
    
  }
  showReviews(){
    this._HomeService.getHome().subscribe(
      (response) => {
        this.loading = false;
        this.reviews = response.feedbacks;
      }
    )
  }
  testimonials:OwlOptions = {
    loop: true,

    dots: false,
    margin:30,
    autoplay: false,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },

      940: {
        items: 2
      }
    }
  }



  onSubmit(testimonialForm:FormGroup){
    this.loadingSpinner = true
    this._ReviewsService.addReview(testimonialForm.value).subscribe(
      (response) => {
        this.loadingSpinner = false

        if(response.success){
          this._Router.navigate(['/thankyou-review'])
        }
        
      }, error => {
        this.loadingSpinner = false

        if (error.error) {
          this.error = error
        }

      }
    )
  }
}
