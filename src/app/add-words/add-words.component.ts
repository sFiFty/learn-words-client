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
  uaControl: FormControl;
  enControl: FormControl;
  private ua;
  private en;
  constructor(private _wordsService: WordsService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.uaControl = new FormControl();
    this.enControl = new FormControl();
    this.uaControl.valueChanges.subscribe(value => {
      this.ua = value;
    });
    this.enControl.valueChanges.subscribe(value => {
      this.en = value;
    });
  }

  public addWord = () => {
    this._wordsService.addWord({
      Ua: this.ua,
      En: this.en,
      Date: moment(),
    }).subscribe(response => {
      this.uaControl.setValue('');
      this.enControl.setValue('');
      this.openSnackBar('Word was successfully added');
    });
  }

  public getTranslation = () => {
    this.translate(this.wordControl.value);
  }

  public translate = (text) => {
    this._wordsService.translate(text).subscribe(data => {
      this.translationControl.setValue(data.translation);
    });
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: 'success'
    });
  }
}
