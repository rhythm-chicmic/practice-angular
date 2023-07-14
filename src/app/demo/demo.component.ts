import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements AfterContentInit,AfterContentChecked, AfterViewInit,DoCheck,AfterViewChecked{
  title:any
  Outputcalled:number=0;
  constructor(private activeRoute:ActivatedRoute,private ref: ChangeDetectorRef){
   this.title= this.activeRoute.data
  
   this.title=(this.title._value.Title)
  }
ngAfterViewChecked(){
  console.log('View checked called');
  
}

  ngAfterViewInit(){
    // this.ref.detectChanges();
    this.title='Hello'
    console.log(this.title)
  }
  onData(event:any){
    console.log(event)
  }
  onOutput(event:any){
    this.Outputcalled++;
  }
ngDoCheck(){
  console.log('Do check called')
}
  ngAfterContentChecked(){
    console.log('Content Checked emitter')
  }

  ngAfterContentInit(){
    console.log("called")
  }
}
