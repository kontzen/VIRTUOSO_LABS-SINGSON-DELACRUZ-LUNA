import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnotherPage } from './another/another.page';
import { AuthenticationService } from './authentication.service';
import { thirdPagePage } from './third-page/third-page';
import { CustomComponent } from './shared/custom.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'another', // folder path
    component: AnotherPage, // page class name
    canActivate: [AuthenticationService],
  },
  {
    path: 'shared', // folder path
    component: CustomComponent, // component class name
  },
  {
    path: 'third-page', // folder path
    component: thirdPagePage, // component class name
    canActivate: [AuthenticationService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
