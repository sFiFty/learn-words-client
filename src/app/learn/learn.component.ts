import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})

export class LearnComponent implements OnInit {

  public words;

  constructor(private _wordsService: WordsService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this._wordsService.getAll().subscribe(words => {
      this.words = words;
    });
  }

}
