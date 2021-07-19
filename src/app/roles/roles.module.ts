import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListComponent } from './list/list.component';

console.log('aa');

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
