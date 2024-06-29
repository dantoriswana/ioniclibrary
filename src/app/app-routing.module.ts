import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilPageModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'edit-profil',
    loadChildren: () =>
      import('./edit-profil/edit-profil.module').then(
        (m) => m.EditProfilPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'keamanan-akun',
    loadChildren: () =>
      import('./keamanan-akun/keamanan-akun.module').then(
        (m) => m.KeamananAkunPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'pengaturan',
    loadChildren: () =>
      import('./pengaturan/pengaturan.module').then(
        (m) => m.PengaturanPageModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'book-detail/:id',
    loadChildren: () =>
      import('./pages/book-detail/book-detail.module').then(
        (m) => m.BookDetailPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'book-content/:id',
    loadChildren: () =>
      import('./pages/book-content/book-content.module').then(
        (m) => m.BookContentPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
