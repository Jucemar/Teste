import { Component, OnInit, Input } from '@angular/core';
import { Time } from './time.model';

@Component({
  selector: 'CFC-time-resumo',
  templateUrl: './time-resumo.component.html',
  styleUrls: ['./time-resumo.component.css']
})
export class TimeResumoComponent implements OnInit {

  @Input() time: Time


  constructor() { }

  ngOnInit() {
  }

  formatUrl(imageUrl: string){
    return 'assets/images/'+imageUrl+'.png'
  }



}
