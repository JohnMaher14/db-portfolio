import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { delay, map, tap } from 'rxjs';
import { AboutUs } from 'src/app/classes/about-us';
import { AboutUsHome } from 'src/app/classes/about-us-home';
import { Casestudy } from 'src/app/classes/casestudy';
import { Review } from 'src/app/classes/review';
import { Slider } from 'src/app/classes/slider';
import { Team } from 'src/app/classes/team';
import { HomeService } from 'src/app/services/home.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading:boolean = false;
  sliders : Slider[] =[];
  studyCaseImage = 'https://digitalbondmena.com/clients/';
  teamImage = 'https://digitalbondmena.com/teams/';
  feedbackImage = 'https://digitalbondmena.com/feedbacks/';
  homeImage = 'https://digitalbondmena.com/home_page/';
  aboutUs!:AboutUsHome;
  teams: Team[]= [];
  studyCases: Casestudy[]= [];
  reviews: Review[] =[];
  skills: any[] = [];
  constructor(private _HomeService:HomeService,
    private _Title:Title
    ) {

    }

    showSliders(){
      this.loading = true ;

      this._HomeService.getHome().subscribe(
        (response => {
          this.sliders = response.sliders
          // this.loading= false
        })
      )

    }


  showTeams(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response => {

        this.teams = response.team
        // this.loading= false
      })
    )
  }
  showStudyCases(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response => {

        this.studyCases = response.clients
        // this.loading= false
      })
    )
  }
  showAboutus(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response => {
        this.aboutUs = response.main
        // this.loading= false
      })
    )
  }

  showReview(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response) => {
        this.reviews = response.feedbacks;
        this.loading= false
      }
    )
  }
  mainSlider: OwlOptions = {
    loop: true,
    dots: true,
    autoplay: false,
    navSpeed: 700,
    nav: true,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_right.png"></a>`],
    animateIn: 'shakeX',
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },

      1024: {
        items: 1
      }
    }
  }
  teamCarousal: OwlOptions = {
    loop:true,
    margin:40,
    dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_right.png"></a>`],
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
    nav:true
  }
  portfolio: OwlOptions = {
    loop: true,
    margin:40,
    autoplay: true,

    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_right.png"></a>`],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3,
        center:true

      },
      940: {
        center:true,

        items: 3
      },
    },
    nav:true
  }
  testimonials: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    nav: true,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },

      1024: {
        items: 2
      }
    }
  }
  partnersSlider: OwlOptions ={
    loop: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    nav: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      960: {
        items: 3,
        center:true

      },

    }
  }
  ngOnInit(): void {
    this.showSliders();
    this.showStudyCases();
    this.showTeams()
    this.showAboutus();
    this.showReview();
    this._Title.setTitle('Digital Bond | Home')

  }
}
