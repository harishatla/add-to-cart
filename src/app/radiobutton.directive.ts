import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appRadiobutton]'
})
export class RadiobuttonDirective {
  @Input() appHighlight='yellow'
  constructor() { }

}
