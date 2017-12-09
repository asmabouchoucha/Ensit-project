import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabledDirective]'
})
export class InscriptionDisabledDirectiveDirective {
  //@HostBinding('class.link-is-disabled') status: boolean;
  //@Input()
  //set appInscriptionDisabled(value) {
  //  this.status = value;
  //}

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backroundColor= 'green'; 
  }
}

