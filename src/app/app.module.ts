import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReferenceComponent } from './menu/reference/reference.component';
import { SettingsComponent } from './menu/settings/settings.component';

import { HeaderComponent } from './header/header.component';
import { AnswerComponent } from './answer/answer.component';
import { SampleItemComponent } from './samples/sample-item/sample-item.component';
import { SampleListComponent } from './samples/sample-list/sample-list.component';
import { QuestionItemComponent } from './questions/question-item/question-item.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';

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
    QuestionListComponent,
    HeaderComponent,
    AnswerComponent,
    SampleItemComponent,
    SampleListComponent,
    QuestionItemComponent,
    QuestionListComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
