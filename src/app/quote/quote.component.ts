import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"Drive your destiny","Mandela","Anthony",new Date(2019,0,22)), 
    new Quote(2,"Quote of quotes","Author","Publisher",new Date(2019,1,22)),
    new Quote(3,"Quote Mingi","Mhandisi","Chief Publisher",new Date(2019,4,10)),
  ]

  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`Are you sure you want to delete this goal`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}
