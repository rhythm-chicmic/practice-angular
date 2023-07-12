import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyBlogModule } from './my-blog/my-blog.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyBlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
