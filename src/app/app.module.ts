import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosComponent } from './components/dados/dados.component';
import { NavComponent } from './components/nav/nav.component';
import { CursosComponent } from './components/sites/cursos/cursos.component';
import { ExperienciasComponent } from './components/sites/experiencias/experiencias.component';
import { HobbisComponent } from './components/sites/hobbis/hobbis.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    NavComponent,
    CursosComponent,
    ExperienciasComponent,
    HobbisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
