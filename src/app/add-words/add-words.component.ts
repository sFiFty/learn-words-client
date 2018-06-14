import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {
  wordControl: FormControl;
  translationControl: FormControl;
  private word;
  private translation;

  constructor(private _wordsService: WordsService, private _router: Router) {

  }

  ngOnInit() {
    this.wordControl = new FormControl();
    this.translationControl = new FormControl();
    this.wordControl.valueChanges.subscribe(value => {
      this.word = value;
    });

    this.translationControl.valueChanges.subscribe(value => {
      this.translation = value;
    });
  }

  public addWord = () => {
    this._wordsService.addWord({
      Name: this.word,
      Translation: this.translation
    }).subscribe(response => {
      this._router.navigate(['learn']);
    });
  }
}
