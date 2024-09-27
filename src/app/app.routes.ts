import { Routes } from '@angular/router';
import { dashboardGuard } from './dashboard.guard';
import { panelGuard } from './panel.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/website.routes').then((m) => m.WebsiteRoutesModule),
  },
  {
    path: 'dashboard',
    canLoad: [dashboardGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (m) => m.DashboardRoutesModule
      ),
  },
  {
    path: 'panel',
    canLoad: [panelGuard],
    loadChildren: () =>
      import('./panelcliente/panel.routes').then((m) => m.PanelRoutesModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
