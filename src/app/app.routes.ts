import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { TimesComponent } from './times/times.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { TimeDetalheComponent } from './times/time-detalhe/time-detalhe.component';
import { CardsComponent } from './cards/cards.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'times', component: TimesComponent},
    {path: 'times/:id', component: TimeDetalheComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'colecoes', component: ColecoesComponent}
]