import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'advanced',
    children: [
      {
        path: 'accordion',
        title: 'Valex - Accordion',
        loadComponent: () => import('./accordion/accordion.component').then(m => m.AccordionComponent),
      },
      {
        path: 'carousel',
        title: 'Valex - Carousel',
        loadComponent: () => import('./carousel/carousel.component').then(m => m.CarouselComponent),
      },
      {
        path: 'modals',
        title: 'Valex - Modals',
        loadComponent: () => import('./modals/modals.component').then(m => m.ModalsComponent),
      },
      {
        path: 'ratings',
        title: 'Valex - Ratings',
        loadComponent: () => import('./ratings/ratings.component').then(m => m.RatingsComponent),
      },
      {
        path: 'search',
        title: 'Valex - Search',
        loadComponent: () => import('./search/search.component').then(m => m.SearchComponent),
      },
      {
        path: 'sweet-alert',
        title: 'Valex - Sweet Alerts',
        loadComponent: () => import('./sweet-alert/sweet-alert.component').then(m => m.SweetAlertComponent),
      },
      {
        path: 'timeline',
        title: 'Valex - Timeline',
        loadComponent: () => import('./timeline/timeline.component').then(m => m.TimelineComponent),
      },
      {
        path: 'userlist',
        title: 'Valex - Userlist',
        loadComponent: () => import('./userlist/userlist.component').then(m => m.UserlistComponent),
      },
      {
        path: 'offcanvas',
        title: 'Valex - Offcanvas',
        loadComponent: () => import('./offcanvas/offcanvas.component').then(m => m.OffcanvasComponent),
      },
      {
        path: 'placeholders',
        title: 'Valex - Placeholders',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
      },
      {
        path: 'swiperjs',
        title: 'Valex - Swiper JS',
        loadComponent: () => import('./swiperjs/swiperjs.component').then(m => m.SwiperjsComponent),
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdvancedRoutingModule {
  static routes=routes
}