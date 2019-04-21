import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ReferenceComponent } from './menu/reference/reference.component';
import { SettingsComponent } from './menu/settings/settings.component';

import { AnswerComponent } from './questions/answer/answer.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { HeaderComponent } from './header/header.component';
import { SetsComponent } from './sets/sets.component';

import {
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceComponent,
    SettingsComponent,
    AnswerComponent,
    QuestionsListComponent,
    HeaderComponent,
    SetsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
