import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KpiComponentComponent } from './kpi-component/kpi-component.component';

const routes: Routes = [
  { path: 'kpi', component: KpiComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
