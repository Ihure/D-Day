import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitalsRoutingModule } from './vitals-routing.module';

// components
import { VitalsComponent } from './vitals.component';
import { InputVitalsComponent } from './input-vitals/input-vitals.component';

@NgModule({
  imports: [CommonModule, VitalsRoutingModule],
  declarations: [VitalsComponent, InputVitalsComponent],
  providers: [],
})
export class VitalsModule {}
