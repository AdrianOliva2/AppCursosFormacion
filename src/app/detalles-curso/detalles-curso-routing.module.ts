import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCursoPage } from './detalles-curso.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCursoPageRoutingModule {}
