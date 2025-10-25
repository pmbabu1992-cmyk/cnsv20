import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'apps',
    children: [
      {
        path: 'calendar',
        title: 'Valex - Calendar',
        loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent),
      },
      {
        path: 'cards',
        title: 'Valex - Cards',
        loadComponent: () => import('./cards/cards.component').then(m => m.CardsComponent),
      },
      {
        path: 'contacts',
        title: 'Valex - Contacts',
        loadComponent: () => import('./contacts/contacts.component').then(m => m.ContactsComponent),
      },
      {
        path: 'draggablecards',
        title: 'Valex - Draggablecards',
        loadComponent: () => import('./draggablecards/draggablecards.component').then(m => m.DraggablecardsComponent),
      },
      {
        path: 'notification',    
        title: 'Valex - Notification',
        loadComponent: () => import('./notification/notification.component').then(m => m.NotificationComponent),
      },
      {
        path: 'widgets',
        title: 'Valex - widgets',
        loadComponent: () => import('./widgets/widgets.component').then(m => m.WidgetsComponent),
      },
      {
        path: 'treeview',
        title: 'Valex - Treeview',
        loadComponent: () => import('./treeview/treeview.component').then(m => m.TreeviewComponent),
      },
      {
        path: 'widgetnotification',
        title: 'Valex - Widgetnotification',
        loadComponent: () => import('./widget-notification/widget-notification.component').then(m => m.WidgetNotificationComponent),
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppsRoutingModule {
  static routes=routes
}