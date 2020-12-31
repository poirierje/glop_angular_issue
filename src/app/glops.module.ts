import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './glops-routing.module';
import { GlopListComponent } from './glop-list.component';
import { GlopDetailComponent } from './glop-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GlopListComponent,
    GlopDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule,
  ],
})
export class GlopsModule { }
