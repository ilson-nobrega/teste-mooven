import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import {RouterModule} from '@angular/router';
import {AdminRoutes} from './admin.routing';

@NgModule({
  declarations: [TokenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
