import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'charts',
    children: [
      {
        path: 'chartjs',
        title: 'Valex - Chartjs',
        loadComponent: () => import('./chartjs/chartjs.component').then(m => m.ChartjsComponent),
      },
      {
        path: 'echarts',
        title: 'Valex - Echarts',
        loadComponent: () => import('./echarts/echarts.component').then(m => m.EchartsComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {
  static routes=routes
}  