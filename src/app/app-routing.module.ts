import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';


const routes: Routes = [
  { path: '', redirectTo: 'chartjs', pathMatch: 'full' },
  { path: 'chartjs', component: ChartjsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
