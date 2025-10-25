import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'elements',
    children: [
      {
        path: 'alerts',
        title: 'Valex - Alerts',
        loadComponent: () => import('./alerts/alerts.component').then(m => m.AlertsComponent),
      },
      {
        path: 'avatar',
        title: 'Valex - Avatar',
        loadComponent: () => import('./avatar/avatar.component').then(m => m.AvatarComponent),
      },
      {
        path: 'badge',
        title: 'Valex - Badge',
        loadComponent: () => import('./badge/badge.component').then(m => m.BadgeComponent),
      },
      {
        path: 'breadcrumbs',
        title: 'Valex - Breadcrumb',
        loadComponent: () => import('./breadcrumbs/breadcrumbs.component').then(m => m.BreadcrumbsComponent),
      },
      {
        path: 'buttons',
        title: 'Valex - Buttons',
        loadComponent: () => import('./buttons/buttons.component').then(m => m.ButtonsComponent),
      },
      {
        path: 'button-group',
        title: 'Valex - Button Group',
        loadComponent: () => import('./button-group/button-group.component').then(m => m.ButtonGroupComponent),
      },
      {
        path: 'dropdown',
        title: 'Valex - Dropdown',
        loadComponent: () => import('./dropdown/dropdown.component').then(m => m.DropdownComponent),
      },
      {
        path: 'images-figures',
        title: 'Valex - Images & Figures',
        loadComponent: () => import('./images-figures/images-figures.component').then(m => m.ImagesFiguresComponent),
      },
      {
        path: 'listgroup',
        title: 'Valex - Listgroup',
        loadComponent: () => import('./listgroup/listgroup.component').then(m => m.ListgroupComponent),
      },
      {
        path: 'links-interactions',
        title: 'Valex - links-interactions',
        loadComponent: () => import('./links-interactions/links-interactions.component').then(m => m.LinksInteractionsComponent),
      },
      {
        path: 'navbar',
        title: 'Valex - Navbar',
        loadComponent: () => import('./navbar/navbar.component').then(m => m.NavbarComponent),
      },
      {
        path: 'pagination',
        title: 'Valex - Pagination',
        loadComponent: () => import('./pagination/pagination.component').then(m => m.PaginationComponent),
      },
      {
        path: 'popover',
        title: 'Valex - Popovers',
        loadComponent: () => import('./popover/popover.component').then(m => m.PopoverComponent),
      },
      {
        path: 'progress',
        title: 'Valex - Progress',
        loadComponent: () => import('./progress/progress.component').then(m => m.ProgressComponent),
      },
      {
        path: 'spinners',
        title: 'Valex - Spinners',
        loadComponent: () => import('./spinners/spinners.component').then(m => m.SpinnersComponent),
      },
      {
        path: 'tabs',
        title: 'Valex - Navs & Tabs',
        loadComponent: () => import('./tabs/tabs.component').then(m => m.TabsComponent),
      },
      {
        path: 'tags',
        title: 'Valex - Tags',
        loadComponent: () => import('./tags/tags.component').then(m => m.TagsComponent),
      },
      {
        path: 'toast',
        title: 'Valex - Toasts',
        loadComponent: () => import('./toast/toast.component').then(m => m.ToastComponent),
      },
      {
        path: 'tooltip',
        title: 'Valex - Tooltips',
        loadComponent: () => import('./tooltip/tooltip.component').then(m => m.TooltipComponent),
      },
      {
        path: 'typography',
        title: 'Valex - Typography',
        loadComponent: () => import('./typography/typography.component').then(m => m.TypographyComponent),
      },
      {
        path: 'scrollspy',
        title: 'Valex - Scrollspy',
        loadComponent: () => import('./scrollspy/scrollspy.component').then(m => m.ScrollspyComponent),
      },
      {
        path: 'object-fit',
        title: 'Valex - Object Fit',
        loadComponent: () => import('./object-fit/object-fit.component').then(m => m.ObjectFitComponent),
      },
    ],
  },
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class ElementsRoutingModule {
  static routes=routes

}