import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registrer',
    loadComponent: () => import('./registrer/registrer.page').then( m => m.RegistrerPage)
  },
  {
    path: 'contra-recuperar',
    loadComponent: () => import('./contra-recuperar/contra-recuperar.page').then( m => m.ContraRecuperarPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./servicios/servicios.page').then( m => m.ServiciosPage)
  },
];
