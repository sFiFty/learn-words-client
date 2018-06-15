import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})

export class LearnComponent implements OnInit {

  public words;

  constructor(private _wordsService: WordsService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this._wordsService.getAll().subscribe(words => {
      this.words = words;
    });
  }

  deleteWord(id) {
    this._wordsService.deleteWord(id).subscribe(word => {
      this.words = this.words.filter(w => w.id !== id);
      this.openSnackBar('Word was successfully removed');
    });
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: 'success'
    });
  }

}
