import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCursosPropiosPageRoutingModule } from './gestion-cursos-propios-routing.module';

import { GestionCursosPropiosPage } from './gestion-cursos-propios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCursosPropiosPageRoutingModule
  ],
  declarations: [GestionCursosPropiosPage]
})
export class GestionCursosPropiosPageModule {}
