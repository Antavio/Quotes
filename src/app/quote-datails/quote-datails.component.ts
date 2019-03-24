import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-datails',
  templateUrl: './quote-datails.component.html',
  styleUrls: ['./quote-datails.component.scss']
})
export class QuoteDatailsComponent implements OnInit {

  @Input() quote:Quote;

  @Output() vote = new EventEmitter<boolean>();
  @Output() quoteDelete = new EventEmitter<boolean>();

  
  deleteQuote(complete:boolean){
    this.quoteDelete.emit(complete);
  }

  upVote(countVote:boolean){
    this.vote.emit(countVote);
  }
  constructor() { }

  ngOnInit() {
  }

}
