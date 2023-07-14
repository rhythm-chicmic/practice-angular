import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseover')
  onHover(){
    this.highlight('yellow')
  }

  private highlight(color:any){
    this.el.nativeElement.style.backgroundColor=color
  }
  @HostListener('mouseleave')
  onLeave(){
    this.highlight('')
  }


}
