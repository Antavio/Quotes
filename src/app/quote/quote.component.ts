import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"Drive your destiny","Mandela","Anthony"), 
    new Quote(2,"Quote of quotes","Author","Publisher"),
    new Quote(3,"Quote Mingi","Mhandisi","Chief Publisher"),
  ]

  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }
  constructor() {
  }

  ngOnInit() {
  }

}
