import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private _Router:Router
  ) { }

  ngOnInit(): void {
  }
  navigateToContact(){
    this._Router.navigate(['/contact'])
  }
}
