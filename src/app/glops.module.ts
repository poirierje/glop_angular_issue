import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlopsRoutingModule } from './glops-routing.module';
import { GlopListComponent } from './glop-list.component';
import { GlopDetailComponent } from './glop-detail.component';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GlopListComponent,
    GlopDetailComponent,
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    GlopsRoutingModule,
  ],
})
export class GlopsModule { }
