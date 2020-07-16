import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayPhotoComponent } from './display-photo/display-photo.component';

@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      AddPhotoComponent,
      NavbarComponent,
      DisplayPhotoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
