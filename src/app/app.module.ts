import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SamplesComponent } from './samples/samples.component';

import { FormsModule } from "@angular/forms";
import {
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
