import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddWordsComponent } from './add-words/add-words.component';
import { HomeComponent } from './home/home.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'add-word', component: AddWordsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddWordsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
