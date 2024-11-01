import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]',
  standalone: true
})
export class HeaderDirective {

  constructor(private el:ElementRef) { 
  this.el.nativeElement.style.backgroundColor="blue"
}
}
