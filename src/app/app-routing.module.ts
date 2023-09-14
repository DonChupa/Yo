import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./Login/login.module').then( m => m.LoginPageModule)
  },
// paths CRUD
  {
    path: 'create',
    loadChildren: () => import('./Create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'read',
    loadChildren: () => import('./Read/read.module').then( m => m.ReadPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./Update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./Delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./Lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./Content/content.module').then(m => m.ContentPageModule)
  },
  

  //
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
