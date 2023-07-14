import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { yResolver } from './y.resolver';

const routes: Routes = [
  {path:'home',component:DemoComponent,pathMatch:'full',data:{Title:'Home Bundle'},resolve:yResolver},
  {path:'myBlogs',loadChildren:()=>import('./my-blog/my-blog.module').then((m)=>m.MyBlogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
