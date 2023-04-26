import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class ChangeColorDirective {
  @Input() appHighlight:any=''

  constructor(private el:ElementRef) { 
    // this.el.nativeElement.style.backgroundColor='green  '
  }

  
  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlightColor(this.appHighlight)
  }

  @HostListener('mouseleave')
  onmouseLeave(){
    this.highlightColor('')
  }

  highlightColor(color){
    this.el.nativeElement.style.backgroundColor=color
  }
  

}
