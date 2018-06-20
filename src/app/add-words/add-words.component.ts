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
  textControl: FormControl;
  translationControl: FormControl;
  public text;
  private translation;
  public language;
  public translationIsShown = false;
  constructor(private _wordsService: WordsService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.textControl = new FormControl();
    this.translationControl = new FormControl();
    this.language = 'uk';
    this.textControl.valueChanges.subscribe(value => {
      this.text = value;
    });
    this.translationControl.valueChanges.subscribe(value => {
      this.translation = value;
    });
  }

  public addWord = () => {
    this._wordsService.addWord({
      Ua: this.text,
      En: this.translation,
      Date: moment(),
    }).subscribe(response => {
      this.textControl.setValue('');
      this.translationControl.setValue('');
      this.openSnackBar('Пара успішно додана!');
    });
  }

  public getTranslation = () => {
    if (!this.textControl.value) {
      this.translationIsShown = false;
    };
    this.translate(this.textControl.value);
  }

  public translate = (text) => {
    this._wordsService.translate(text).subscribe(data => {
      this.translationIsShown = true;
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
