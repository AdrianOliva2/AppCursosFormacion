import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { UserLoggedGuard } from './guards/user-logged.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gestion-cursos-propios',
    loadChildren: () => import('./gestion-cursos-propios/gestion-cursos-propios.module').then( m => m.GestionCursosPropiosPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'mis-cursos',
    loadChildren: () => import('./mis-cursos/mis-cursos.module').then( m => m.MisCursosPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [UserLoggedGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
