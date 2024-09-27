import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'cursos',
        loadComponent: () =>
          import('./cursos/cursos.component').then((m) => m.CursosComponent),
      },
      {
        path: 'entidades',
        loadComponent: () =>
          import('./entidades/entidades.component').then(
            (m) => m.EntidadesComponent
          ),
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import('./categorias/categorias.component').then(
            (m) => m.CategoriasComponent
          ),
      },
    ],
  },
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutesModule {}
