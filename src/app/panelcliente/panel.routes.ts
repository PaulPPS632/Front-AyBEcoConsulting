import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClienteComponent } from './layout-cliente/layout-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClienteComponent,
    children: [
      {
        path: '',
        redirectTo: 'matriculados',
        pathMatch: 'full',
      },
      {
        path: 'matriculados',
        loadComponent: () =>
          import('./matriculados/matriculados.component').then(
            (m) => m.MatriculadosComponent
          ),
        data: {
          title: 'Matriculados',
        },
      },
      {
        path: 'certificados',
        loadComponent: () =>
          import('./certificados-cliente/certificados-cliente.component').then(
            (m) => m.CertificadosClienteComponent
          ),
        data: {
          title: 'Certificados',
        },
      },
    ],
  },
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutesModule {}
