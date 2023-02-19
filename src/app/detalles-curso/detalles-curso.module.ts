import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCursoPageRoutingModule } from './detalles-curso-routing.module';

import { DetallesCursoPage } from './detalles-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCursoPageRoutingModule
  ],
  declarations: [DetallesCursoPage]
})
export class DetallesCursoPageModule {}
