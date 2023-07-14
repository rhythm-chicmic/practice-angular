import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-recipie',
  templateUrl: './hello-recipie.component.html',
  styleUrls: ['./hello-recipie.component.scss']
})
export class HelloRecipieComponent {
  data='rhythm'
  addData(event:any){
    this.data = event
  }
  onKeyDown(event:any){
    console.log(event)
  }
}
