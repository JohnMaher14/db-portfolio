import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bonders',
  templateUrl: './bonders.component.html',
  styleUrls: ['./bonders.component.scss']
})
export class BondersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  partners: OwlOptions = {
    loop: true,

    margin:40,
    center: true,
    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle center' id='team-circle-left'><i class='lni lni-chevron-left'></i></a>`
    , `<a class='circle center' id='team-circle-right'><i class='lni lni-chevron-right'></i></a>`],
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
  clients: OwlOptions = {
    loop: true,

    margin:40,
    center: true,
    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle white center' id='team-circle-left'><i class='lni lni-chevron-left'></i></a>`
    , `<a class='circle white center' id='team-circle-right'><i class='lni lni-chevron-right'></i></a>`],
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
}
