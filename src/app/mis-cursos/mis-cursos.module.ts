import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCursosPageRoutingModule } from './mis-cursos-routing.module';

import { MisCursosPage } from './mis-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCursosPageRoutingModule
  ],
  declarations: [MisCursosPage]
})
export class MisCursosPageModule {}
