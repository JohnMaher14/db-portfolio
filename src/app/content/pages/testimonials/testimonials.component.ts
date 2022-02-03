import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormControl } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }
  testimonialForm:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required) ,
    'email': new FormControl('',[Validators.required , Validators.email]),
    'position': new FormControl('',Validators.required),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^(0|[1-9][0-9]*)$/)]),
    'review': new FormControl('',Validators.required)
  })
  ngOnInit(): void {

  }
  testimonials:OwlOptions = {
    loop: true,

    dots: false,
    margin:30,
    autoplay: false,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },

      940: {
        items: 2
      }
    }
  }



  onSubmit(testimonialForm:FormGroup){
    console.log(testimonialForm.value);
  }
}
