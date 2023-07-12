import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:'home',component:DemoComponent,pathMatch:'full'},
  {path:'myBlogs',loadChildren:()=>import('./my-blog/my-blog.module').then((m)=>m.MyBlogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
