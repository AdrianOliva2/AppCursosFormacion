import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCursosPage } from './mis-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: MisCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCursosPageRoutingModule {}
