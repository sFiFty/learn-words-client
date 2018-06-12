import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddWordsComponent } from './add-words/add-words.component';
import { HomeComponent } from './home/home.component';
import { WordsService } from './words.service';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';

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
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
