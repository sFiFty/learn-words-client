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
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { LearnComponent } from './learn/learn.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddWordsComponent },
  { path: 'learn', component: LearnComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddWordsComponent,
    HomeComponent,
    NavigationComponent,
    LearnComponent,
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
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
