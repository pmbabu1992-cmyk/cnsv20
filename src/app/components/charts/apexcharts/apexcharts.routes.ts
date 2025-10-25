import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'charts/apexcharts',
    children: [
      {
        path: 'linecharts',
        title: 'Valex - Line Chart',
        loadComponent: () => import('./linecharts/linecharts.component').then(m => m.LinechartsComponent),
      },
      {
        path: 'areacharts',
        title: 'Valex - Area Chart',
        loadComponent: () => import('./areacharts/areacharts.component').then(m => m.AreachartsComponent),
      },
      {
        path: 'columncharts',
        title: 'Valex - Column Chart',
        loadComponent: () => import('./columncharts/columncharts.component').then(m => m.ColumnchartsComponent),
      },
      {
        path: 'barcharts',
        title: 'Valex - Bar Chart',
        loadComponent: () => import('./barcharts/barcharts.component').then(m => m.BarchartsComponent)
      },
      {
        path: 'mixedcharts',
        title: 'Valex - Mixed Chart',
        loadComponent: () => import('./mixedcharts/mixedcharts.component').then(m => m.MixedchartsComponent),
      },
      {
        path: 'rangeareacharts',
        title: 'Valex - Range Area Charts',
        loadComponent: () => import('./rangeareacharts/rangeareacharts.component').then(m => m.RangeareachartsComponent),
      },
      {
        path: 'timelinecharts',
        title: 'Valex - Timeline Charts',
        loadComponent: () => import('./timelinecharts/timelinecharts.component').then(m => m.TimelinechartsComponent),
      },
      {
        path: 'candlestickcharts',
        title: 'Valex - CandleStick Charts',
        loadComponent: () => import('./candlestickcharts/candlestickcharts.component').then(m => m.CandlestickchartsComponent),
      },
      {
        path: 'boxplotcharts',
        title: 'Valex - Boxplot Chart',
        loadComponent: () => import('./boxplotcharts/boxplotcharts.component').then(m => m.BoxplotchartsComponent),
      },
      {
        path: 'bubblecharts',
        title: 'Valex - Bubble Chart',
        loadComponent: () => import('./bubblecharts/bubblecharts.component').then(m => m.BubblechartsComponent),
      },
      {
        path: 'scattercharts',
        title: 'Scatter - Scatter Chart',
        loadComponent: () => import('./scattercharts/scattercharts.component').then(m => m.ScatterchartsComponent),
      },
      {
        path: 'heatmapcharts',
        title: 'Valex - Heatmap Chart',
        loadComponent: () => import('./heatmapcharts/heatmapcharts.component').then(m => m.HeatmapchartsComponent),
      },
      {
        path: 'treemapcharts',
        title: 'Valex - Treemap Chart',
        loadComponent: () => import('./treemapcharts/treemapcharts.component').then(m => m.TreemapchartsComponent),
      },
      {
        path: 'piecharts',
        title: 'Valex - Pie Chart',
        loadComponent: () => import('./piecharts/piecharts.component').then(m => m.PiechartsComponent),
      },
      {
        path: 'radialbarcharts',
        title: 'Valex - Radialbar Chart',
        loadComponent: () => import('./radialbarcharts/radialbarcharts.component').then(m => m.RadialbarchartsComponent),
      },
      {
        path: 'radarcharts',
        title: 'Valex - Radar Chart',
        loadComponent: () => import('./radarcharts/radarcharts.component').then(m => m.RadarchartsComponent),
      },
      {
        path: 'polarareacharts',
        title: 'Valex - Polararea Chart',
        loadComponent: () => import('./polarareacharts/polarareacharts.component').then(m => m.PolarareachartsComponent),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApexchartsRoutingModule { 
  static routes=routes
}
