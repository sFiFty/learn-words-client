import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddWordsComponent } from './add-words/add-words.component';
import { HomeComponent } from './home/home.component';
import { WordsService } from './words.service';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'add-word', component: AddWordsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddWordsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
