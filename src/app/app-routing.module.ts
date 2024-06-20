import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  

  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },

  {
    path: 'edit-profil',
    loadChildren: () => import('./edit-profil/edit-profil.module').then(m => m.EditProfilPageModule)
  },
  {
    path: 'keamanan-akun',
    loadChildren: () => import('./keamanan-akun/keamanan-akun.module').then(m => m.KeamananAkunPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then(m => m.PengaturanPageModule)
  },

  {
    path: 'book-detail/:id',
    loadChildren: () => import('./pages/book-detail/book-detail.module').then(m => m.BookDetailPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'histori',
    loadChildren: () => import('./histori/histori.module').then( m => m.HistoriPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
