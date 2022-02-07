import { Component, OnInit } from '@angular/core';
import { FacebookService , InitParams} from 'ngx-facebook';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _NgxSpinnerService:NgxSpinnerService, private _FacebookService:FacebookService){

    // this._NgxSpinnerService.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this._NgxSpinnerService.hide();
    // }, 5000);
  }
  title = 'ng-db-porfolio';

  ngOnInit(): void {
      const InitParams: InitParams = {
        xfbml: true ,
        version: 'v3.2'
      }
      this._FacebookService.init(InitParams)
  }

}
