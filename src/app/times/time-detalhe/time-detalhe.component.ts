import { Component, OnInit } from '@angular/core';
import { CardsTimeService } from '../cards-time.service';
import { Card } from 'src/app/cards/card.model';
import { ActivatedRoute } from '@angular/router';
import { Time } from './../time-resumo/time.model';
import { TimesService } from './../times.service';

@Component({
  selector: 'CFC-time-detalhe',
  templateUrl: './time-detalhe.component.html',
  styleUrls: ['./time-detalhe.component.css']
})
export class TimeDetalheComponent implements OnInit {

  cards: Card[]
  time: Time

  constructor(private cardsTimeService: CardsTimeService, private timesService: TimesService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.cardsTimeService.cardsDoTimeId(this.route.snapshot.params['id'])
    .subscribe(cards => this.cards = cards)

    console.log(`parametro: ${this.route.snapshot.params['id']}`)

    this.timesService.timeById(this.route.snapshot.params['id'])
    .subscribe(time => this.time = time)
  }

  formatUrl(imageUrl: string){
    return 'assets/images/'+imageUrl+'.png'
  }



}
