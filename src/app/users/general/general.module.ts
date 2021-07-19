import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { LoginHistoryComponent } from './login-history/login-history.component';

console.log('general module loaded')
@NgModule({
  declarations: [LoginHistoryComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
