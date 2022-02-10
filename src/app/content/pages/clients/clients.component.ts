import { trigger, transition, animate, style } from '@angular/animations'
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CasestudyService } from 'src/app/services/casestudy.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('slide', [
        transition(':enter', [
          style({
            transform: 'translateY(100%)',
          }),
          animate(400,
            style({
              transform: 'translateY(0)',
            })
          )
        ]),
        transition(':leave', [
          style({}),
          animate(400,
            style({
              transform: 'translateY(0%)',
            })
          )
        ])
      ])
    ]
})
export class ClientsComponent implements OnInit {
  loading= true;
  caseStudies: any[] = [];
  caseStudyImage='https://digitalbondmena.com/case-study/';
  constructor(private _CasestudyService:CasestudyService) {

  }
  getCaseStudies(){
    this._CasestudyService.getCaseStudies().subscribe(
      (response => {
        this.caseStudies = response.caseStudys
        this.loading= false
      })
    )
  }
  caseStudiesSlider: OwlOptions ={
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
    this.getCaseStudies()
  }

}
