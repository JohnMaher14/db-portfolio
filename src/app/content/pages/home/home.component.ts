import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/services/home.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;
  sliders : any[] =[];
  studyCaseImage = 'https://digitalbondmena.com/clients/';
  teamImage = 'https://digitalbondmena.com/teams/';
  feedbackImage = 'https://digitalbondmena.com/feedbacks/';
  aboutUs :any;
  teams: any[]= [];
  studyCases: any[]= [];
  reviews: any[] =[];
  skills: any[] = [];
  constructor(private _HomeService:HomeService,
    private _ReviewsService:ReviewsService
    ) { }

  ngOnInit(): void {
    this.showSliders();
    this.showStudyCases();
    this.showTeams()
    this.showAboutus();
    this.showReview()
  }
  showSliders(){
    this._HomeService.getHome().subscribe(
      (response => {
        this.loading= false
        this.sliders = response.sliders
      })
    )
  }
  showTeams(){
    this._HomeService.getHome().subscribe(
      (response => {
        this.loading= false

        this.teams = response.team
      })
    )
  }
  showStudyCases(){
    this._HomeService.getHome().subscribe(
      (response => {
        this.loading= false

        this.studyCases = response.clients
      })
    )
  }
  showAboutus(){
    this._HomeService.getHome().subscribe(
      (response => {
        this.loading= false

        // this.aboutUs = response.main
        // this.aboutUs = response.main.en_about_home_title;
        // this.aboutUs = response.main.en_about_home_text;
        this.aboutUs = response.main
                console.log(this.aboutUs);
      })
    )
  }
  // showSkills(){
  //   this._HomeService.getHome().subscribe(
  //     (response => {
  //       this.loading= false

  //       this.skills = response.skills
  //     })
  //   )
  // }
  showReview(){
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
    autoplay: true,
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
    center: true,
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
        items: 3
      },
      940: {
        items: 3
      },
    },
    nav:true
  }
  portfolio: OwlOptions = {
    loop: true,
    margin:40,
    autoplay: true,

    center: true,
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
        items: 3
      },
      940: {
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
    center:true,
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
        items: 3
      },

    }
  }

}
