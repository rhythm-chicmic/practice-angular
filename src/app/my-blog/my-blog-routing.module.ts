import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { HelloRecipieComponent } from "./hello-recipie/hello-recipie.component";

const routes:Routes= [
    {path:'recipie',component:HelloRecipieComponent,pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class myBlogsRoutes {}