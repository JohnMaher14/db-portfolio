import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerImage } from 'src/app/classes/banner-image';
import { BannerService } from 'src/app/services/banner.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.scss']
})
export class OtherServiceComponent implements OnInit {

  loading = true ;
  serviceDetails:any[] = [];
  otherServicesArray: any[]= [];
  bannerImage!:BannerImage;
  serviceImage='https://digitalbondmena.com/services/';
  indexForNumbers!: number;
  constructor(private _ServicesService:ServicesService , private _ActivatedRoute:ActivatedRoute,
    private _BannerService:BannerService
    ) {

  }
  showServicesDetails(){
    this.loading = true ;

    this.indexForNumbers = this._ActivatedRoute.snapshot.params["id"];
    this._ServicesService.getServicesDetails(this.indexForNumbers)
    .subscribe((data) => {
      this.serviceDetails = data.service;
      this.loading = false
    });
  }
  showOtherServicesDetails(){
    this.loading = true ;

    this.indexForNumbers = this._ActivatedRoute.snapshot.params["id"];
    this._ServicesService.getServicesDetails(this.indexForNumbers)
    .subscribe((data) => {
      this.otherServicesArray = data.otherSecives;
      this.loading = false
      console.log(data.otherSecives);
    });
  }
  showBannerImage(){
    this.loading = true ;

    this._BannerService.getBanner().subscribe(
      (response) => {
        this.bannerImage = response.bannerImages[0]
        this.loading = false
      }
    )
  }
  servicesSlider: OwlOptions = {

    loop: true,
    margin:40,
    autoplay: true,

    center: true,
    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },

      940: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    nav:true
  }
  ngOnInit(): void {
    this.showServicesDetails();
    this.showBannerImage();
    this.showOtherServicesDetails();
  }
}
