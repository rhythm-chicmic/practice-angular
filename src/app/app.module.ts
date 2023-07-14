import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyBlogModule } from './my-blog/my-blog.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewChildComponent } from './view-child/view-child.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayDataDirective } from './display-data.directive'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent,
    ViewChildComponent,
    HighlightDirective,
    DisplayDataDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MyBlogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
