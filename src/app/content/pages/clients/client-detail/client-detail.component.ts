import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CasestudyService } from 'src/app/services/casestudy.service';
@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  loading= true;
  caseStudy: any;
  caseStudyImages: any[]=[];
  caseStudyImage='https://digitalbondmena.com/case_study_model_image/';
  caseStudyModels: any[]= [];
  idOfCaseStudy:any;
  idOfCaseStudyModel:any;
  constructor(private _CasestudyService:CasestudyService,
    private _ActivatedRoute:ActivatedRoute
    
    ) {

  }
  showCaseStudy(){
    this.idOfCaseStudy = this._ActivatedRoute.snapshot.params["id"];
    console.log(this.idOfCaseStudy);
    this._CasestudyService.getCaseStudyDetail(this.idOfCaseStudy).subscribe(
      (response) => {
        this.caseStudy = response.caseStudyData[0]
        this.loading= false
      }
    )
  }
  showCaseStudyModel(){
    this.idOfCaseStudy = this._ActivatedRoute.snapshot.params["id"];
    this._CasestudyService.getCaseStudyModel(this.idOfCaseStudy).subscribe(
    (response)=> {
      this.caseStudyModels = response.caseStudyModels
      this.loading= false

      // console.log(this.caseStudyModels);
    }) 
  }
  // showCaseStudyImages(){
  //   // this.idOfCaseStudyImageModel = this.
  //   this.idOfCaseStudyModel = this._ActivatedRoute;
  //   this._CasestudyService.getCaseStudyImages(this.idOfCaseStudy).subscribe(
  //     (response)=> {
  //       this.caseStudyImages = response.caseStudyImages
  //       this.loading= false

  //       // console.log(response.caseStudyImages);
  //     }) 
  // }
  caseStudiesSlider: OwlOptions ={
    loop: true,
    margin:40,
    autoplay: false,

    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    items: 1,
    nav:true
  }
  ngOnInit(): void {
    this.showCaseStudy();
    this.showCaseStudyModel()
    // this.showCaseStudyImages()
  }
}
