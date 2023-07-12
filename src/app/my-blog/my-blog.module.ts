import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRecipieComponent } from './hello-recipie/hello-recipie.component';
import { myBlogsRoutes } from './my-blog-routing.module';


@NgModule({
  declarations: [
    HelloRecipieComponent
  ],
  imports: [
    CommonModule,
    myBlogsRoutes
  ],  
  exports:[]
})
export class MyBlogModule { }
