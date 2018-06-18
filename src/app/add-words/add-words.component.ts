import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WordsService } from '../words.service';
import { MatSnackBar } from '@angular/material';
import * as moment from 'moment';

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
  constructor(private _wordsService: WordsService, private _snackBar: MatSnackBar) {}

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
      Translation: this.translation,
      Date: moment(),
    }).subscribe(response => {
      this.wordControl.setValue('');
      this.translationControl.setValue('');
      this.openSnackBar('Word was successfully added');
    });
  }

  public translate = (text) => {
    this._wordsService.translate(text).subscribe(data => {
      this.translationControl.setValue('Hello');
    });
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: 'success'
    });
  }
}
