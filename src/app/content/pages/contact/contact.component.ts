import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
FormGroup
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactForm:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required) ,
    'email': new FormControl('',[Validators.required , Validators.email]),
    'position': new FormControl('',Validators.required),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^(0|[1-9][0-9]*)$/)]),
    'message': new FormControl('',Validators.required)
  })
  ngOnInit(): void {

  }




  onSubmit(testimonialForm:FormGroup){
    console.log(testimonialForm.value);
  }
}
