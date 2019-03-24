import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"Drive your destiny","Mandela","Anthony",0,0,new Date(2019,0,22)), 
    new Quote(2,"Quote of quotes","Author","Publisher",0,0,new Date(2019,1,22)),
    new Quote(3,"Quote Mingi","Mhandisi","Chief Publisher",0,0,new Date(2019,4,10)),
  ]

  quoteSubmission(quote){
    quote.id +=1;
    quote.actualDate = new Date(quote.actualDate);
    this.quotes.push(quote);
  }

  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`Are you sure you want to delete this Quote`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  upVote(upVoting,index){
    if(upVoting){
      this.quotes[index].upvotes +=1;
    }
  }
  downVote(downVoting,index){
    if(downVoting){
      this.quotes[index].downVote +=1;
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}
