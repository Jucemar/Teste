import { Time } from './time-resumo/time.model'
import { MEAT_API } from './../app.api'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Http } from '@angular/http'
import { ErroHandler } from '../app.error-handler'

@Injectable()
export class TimesService {

  constructor(private http: Http) { }

  times(): Observable<Time[]> {
    return this.http.get(`${MEAT_API}/times`)
      .map(response => response.json())
      .catch(ErroHandler.handleError)
  }

  timeById(id: string): Observable<Time> {
    console.log(`Nome do time: ${MEAT_API}/times/${id}`)
    return this.http.get(`${MEAT_API}/times/${id}`)
      .map(response => response.json())
      .catch(ErroHandler.handleError)
  }


}