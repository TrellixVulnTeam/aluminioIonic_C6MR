import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisProductosPageRoutingModule } from './mis-productos-routing.module';

import { MisProductosPage } from './mis-productos.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    MisProductosPageRoutingModule
  ],
  declarations: [MisProductosPage]
})
export class MisProductosPageModule {}
