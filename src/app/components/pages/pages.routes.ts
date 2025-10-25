import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




const routes: Routes = [
    {
        path: 'pages',
        children: [
            {
                path: 'editprofile', title:"Valex - Editprofile",
                loadComponent: () => import('./edit-profile/edit-profile.component').then(m => m.EditProfileComponent)
            },
            {
                path: 'emptypage', title:"Valex - Emptypage",
                loadComponent: () => import('./empty-page/empty-page.component').then(m => m.EmptyPageComponent)
            },
            {
                path: 'faqs', title:"Valex - Faqs",
                loadComponent: () => import('./faqs/faqs.component').then(m => m.FaqsComponent)
            },
            {
                path: 'gallery', title:"Valex - Gallery",
                loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent)
            },
            {
                path: 'invoice', title:"Valex - Invoice",
                loadComponent: () => import('./invoice/invoice.component').then(m => m.InvoiceComponent)
            },
            {
                path: 'pricing', title:"Valex - Pricing",
                loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent)
            },
            {
                path: 'profile', title:"Valex - Profile",
                loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
            },
            {
                path: 'todotask', title:"Valex - Todotask",
                loadComponent: () => import('./todotask/todotask.component').then(m => m.TodotaskComponent)
            },
            {
                path: 'aboutus', title:"Valex - Aboutus",
                loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
            },
            {
                path: 'settings', title:"Valex - Settings",
                loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
            }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
  static routes=routes

 }