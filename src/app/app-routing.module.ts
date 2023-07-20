import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/sites/cursos/cursos.component';
import { ExperienciasComponent } from './components/sites/experiencias/experiencias.component';
import { HobbisComponent } from './components/sites/hobbis/hobbis.component';

const routes: Routes = [
  { path: "", component: CursosComponent},
  { path: "experiencias", component: ExperienciasComponent},
  {path: "hobbis", component: HobbisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




