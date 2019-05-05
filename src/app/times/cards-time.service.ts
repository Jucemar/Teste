import { MEAT_API } from './../app.api'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Http } from '@angular/http'
import { ErroHandler } from '../app.error-handler'
import { Card } from '../cards/card.model';

@Injectable()
export class CardsTimeService {
    constructor(private http: Http) { }
    cardsDoTimeId(id: string): Observable<Card[]> {
        return this.http.get(`${MEAT_API}/cards?time_id=${id}`)
            .map(response => response.json())
            .catch(ErroHandler.handleError)
    }
}