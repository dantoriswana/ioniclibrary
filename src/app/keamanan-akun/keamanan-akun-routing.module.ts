import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeamananAkunPage } from './keamanan-akun.page';

const routes: Routes = [
  {
    path: '',
    component: KeamananAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeamananAkunPageRoutingModule {}
