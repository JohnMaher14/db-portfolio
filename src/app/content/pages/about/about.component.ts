import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { tap, delay } from 'rxjs';
import { AboutUs } from 'src/app/classes/about-us';
import { BannerImage } from 'src/app/classes/banner-image';
import { Team } from 'src/app/classes/team';
import { AboutUsService } from 'src/app/services/about-us.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  loading= false;
  teamImage = 'https://digitalbondmena.com/teams/';
  aboutUsPage = 'https://digitalbondmena.com/about_us_page/';

  aboutUs!: AboutUs;
  pageBanner: BannerImage[] = [];
  teams: Team[] = [];
  constructor(
    private _AboutUsService:AboutUsService,
    private _Title:Title
  ) {
      this._Title.setTitle('Digital Bond | About us')
  }
  showAboutUsSection(){
    this.loading = true ;

    this._AboutUsService.getAboutusPage().subscribe(
      (response)=> {

        this.aboutUs = response.aboutUsPage;
        this.teams= response.team;

        this.loading = false
      }
    )
  }


  ngOnInit(): void {
    this.showAboutUsSection();
  }
  teamCarousal: OwlOptions = {
    loop: true,
    autoplay: true,
    margin:40,
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
        center: true,

        items: 3
      },
      940: {
        center: true,

        items: 3
      },
    },
  }
}
