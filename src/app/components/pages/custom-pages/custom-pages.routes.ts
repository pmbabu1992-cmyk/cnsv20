import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'signin', title:"Valex - Signin",
              loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent)
          },
          {
              path: 'sign-up', title:"Valex - Sign Up",
              loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent)
          },
          {
              path: 'forgot-password', title:"Valex - Forgot Password",
              loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
          },
          {
              path: 'reset-password', title:"Valex - Reset Password",
              loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
          },
          {
              path: 'lockscreen', title:"Valex - Lockscreen",
              loadComponent: () => import('./lockscreen/lockscreen.component').then(m => m.LockscreenComponent)
          },
          {
            path: 'under-construction', title:"Valex - Under-construction",
            loadComponent: () => import('./under-construction/under-construction.component').then(m => m.UnderConstructionComponent)
          },
          {
            path: 'error404', title:"Valex - Error 404",
            loadComponent: () => import('./error404/error404.component').then(m => m.Error404Component)
          },
          {
            path: 'error500', title:"Valex - Error 500",
            loadComponent: () => import('./error500/error500.component').then(m => m.Error500Component)
          },
          {
            path: 'error501', title:"Valex - Error 501",
            loadComponent: () => import('./error501/error501.component').then(m => m.Error501Component)
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { 
  static routes=routes
}
