import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/website.routes').then((m) => m.WebsiteRoutesModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (m) => m.DashboardRoutesModule
      ),
    data: {
      title: 'Dashboard',
      roles: ['administrador', 'profesor', 'encargado'],
    },
  },
  {
    path: 'panel',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./panelcliente/panel.routes').then((m) => m.PanelRoutesModule),
    data: {
      title: 'Panel',
      roles: ['alumno'],
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
