import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputVitalsComponent } from './input-vitals/input-vitals.component';

const routes = [
  {
    path: '',
    component: InputVitalsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitalsRoutingModule {}
