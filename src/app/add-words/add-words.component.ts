import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {


  constructor(private _wordsService: WordsService) {

  }

  ngOnInit() {
    this._wordsService.getAll().subscribe(users => {
      console.log(users);
    });
  }
}
