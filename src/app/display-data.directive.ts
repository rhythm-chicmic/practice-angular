
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplayData]'
})
export class DisplayDataDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover')
  onHover(){
    this.changeData(2)
  }

  private changeData(increment:any){
    this.el.nativeElement.innerText=parseInt( this.el.nativeElement.innerText)*increment;
  }


}
