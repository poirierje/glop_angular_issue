import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlopListComponent } from './glop-list.component';

const routes: Routes = [
  { path: 'glops', component: GlopListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GlopsRoutingModule { }
