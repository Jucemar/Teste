import { Component, OnInit, Input } from '@angular/core'
import { Time } from './time-resumo/time.model'
import { TimesService } from './times.service'
import { TimeResumoComponent } from './time-resumo/time-resumo.component';


@Component({
  selector: 'CFC-times',
  templateUrl: './times.component.html',  
  styleUrls: ['./times.component.css']  
})

export class TimesComponent implements OnInit {

  @Input() times: Time[]

  constructor(private timesService: TimesService) { }

  ngOnInit() {
    this.timesService.times()
    .subscribe(times => this.times = times)
  }

  

  }
