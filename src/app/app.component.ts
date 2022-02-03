import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _NgxSpinnerService:NgxSpinnerService){

    this._NgxSpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._NgxSpinnerService.hide();
    }, 5000);
  }
  title = 'ng-db-porfolio';



}
