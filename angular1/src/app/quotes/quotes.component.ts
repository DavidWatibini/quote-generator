import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[
    new Quotes(1, 'Wati David', 'True success is impacting the world with the investment within your personality'),
    new Quotes(2, 'Marvin Makhanu', 'Go big or simply go home')
  ]

  constructor() { }

  ngOnInit() {
  }

}
