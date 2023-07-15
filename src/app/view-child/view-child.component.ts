import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit{
@Output() data:any=new EventEmitter();
@Output() outputcalled:any= new EventEmitter();
@Input() master='';
constructor(){
  // this.data = 'ggg'
}


ngOnInit(): void {
this.data.emit('home')
}
onClick(){
  this.outputcalled.emit('Called')
  
}

}
