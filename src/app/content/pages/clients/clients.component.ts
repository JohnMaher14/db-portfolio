import { trigger, transition, animate, style } from '@angular/animations'
import { Component, OnInit } from '@angular/core';
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
  constructor(private _CasestudyService:CasestudyService) {

  }

  ngOnInit(): void {
    this.caseStudies()
  }
  caseStudies(){
    console.log(this._CasestudyService.getCaseStudies());
  }
}
