import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import { TimesComponent } from './times/times.component'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'
import { ColecoesComponent } from './colecoes/colecoes.component'
import { TimeDetalheComponent } from './times/time-detalhe/time-detalhe.component'
import { CardsComponent } from './cards/cards.component'
import { TimeResumoComponent } from './times/time-resumo/time-resumo.component'
import { TimesService } from './times/times.service'
import { CardComponent } from './cards/card/card.component'
import { CardsTimeService } from './times/cards-time.service';
import { FatiaArraysPipe } from './fatia-arrays.pipe'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TimesComponent,
    ColecoesComponent,
    TimeDetalheComponent,
    CardsComponent,
    TimeResumoComponent,
    CardComponent,
    FatiaArraysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [TimesService, CardsTimeService],
  bootstrap: [AppComponent],})
export class AppModule { }
