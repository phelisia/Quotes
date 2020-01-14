import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quote []=[
    new Quote(1,'Your limitation—it’s only your imagination','inspirational',new Date(2020,1,20)),
   new Quote (2,'Wake up with determination. Go to bed with satisfaction', 'inspirational',new Date(2016,10,5)),
   new Quote (3,'Do something today that your future self will thank you for','inspirational',new Date(2010,1,14)),
   new Quote (4,'Don’t stop when you’re tired. Stop when you’re done','inspirational',new Date(2019,2,14)),
   new Quote (5,' Don’t wait for opportunity. Create it','inspirational',new Date(2017,6,6)),
    new Quote(6,'Success doesn’t just find you. You have to go out and get it','inspirational',new Date(1999,5,20)),
  ];
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
