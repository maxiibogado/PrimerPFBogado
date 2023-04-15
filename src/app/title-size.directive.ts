import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'h1[appTitleSize]'
})
export class TitleSizeDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '50px !important';
  }
}
