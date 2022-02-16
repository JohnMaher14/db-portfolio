import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverfooter]'
})
export class HoverfooterDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('appHoverfooter') footerBackground:any;  

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.footerBackground);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.footerBackground);
  }

}
