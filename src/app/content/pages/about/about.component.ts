import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AboutUsService } from 'src/app/services/about-us.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  loading= true;
  teamImage = 'https://digitalbondmena.com/teams/';
  aboutUsPage = 'https://digitalbondmena.com/about_us_page/';
  aboutBannerImage= '';
  aboutSectionTitle = '';
  aboutSectionText = '';
  aboutSectionImage= '';

  missionTitle='';
  visionTitle='';
  aboutUs: any;;
  pageBanner: any[] = [];
  teams: any[] = [];
  missionAndVission: any[] = [];
  constructor(
    private _AboutUsService:AboutUsService,
    ) { }
  showAboutUsSection(){
    this._AboutUsService.getAboutusPage().subscribe(
      (response)=> {
        this.loading = false
        this.aboutBannerImage = response.aboutUsPage.about_banner_image;
        this.aboutSectionImage = response.aboutUsPage.about_section_image;
        this.aboutSectionTitle = response.aboutUsPage.en_about_section_title;
        this.aboutSectionText = response.aboutUsPage.en_about_section_text;
        this.visionTitle = response.aboutUsPage.en_vision_text;
        this.missionTitle = response.aboutUsPage.en_mission_text;
        this.aboutUs = response.aboutUsPage
      }
    )
  }
  // showPageBanner(){
  //   this._AboutUsService.getPageBanner().subscribe(
  //     (response)=> {
  //       this.loading = false

  //       this.pageBanner = response
  //     }
  //   )
  // }
  // showVisionAndMission(){
  //   this._AboutUsService.getVisionAndMission().subscribe(
  //     (response)=> {
  //       this.loading = false

  //       this.missionAndVission = response
  //     }
  //   )
  // }
  showTeams(){
    this._AboutUsService.getAboutusPage().subscribe(
      (response)=>{
        this.loading = false

        this.teams= response.team
      }
    )
  }
  ngOnInit(): void {
    this.showTeams();
    this.showAboutUsSection();
    // this.showPageBanner();
    // this.showVisionAndMission();
  }
  teamCarousal: OwlOptions = {
    loop: true,
    autoplay: true,
    margin:40,
    center: true,
    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
    },
  }
}
