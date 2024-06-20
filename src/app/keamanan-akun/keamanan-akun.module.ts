import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeamananAkunPageRoutingModule } from './keamanan-akun-routing.module';

import { KeamananAkunPage } from './keamanan-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeamananAkunPageRoutingModule
  ],
  declarations: [KeamananAkunPage]
})
export class KeamananAkunPageModule {}
