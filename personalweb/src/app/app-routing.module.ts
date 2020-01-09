import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { DS_SP_Component } from './projecs/ds_sp';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'santaproblem', component: DS_SP_Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
