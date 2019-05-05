import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'CFC-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card

  constructor() { }

  ngOnInit() {
  }

  formatUrl(imageUrl: string){
    return 'assets/images/'+imageUrl+'.jpg'
  }

}
