import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutWebsiteComponent } from './layout-website/layout-website.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'catalogo',
        loadComponent: () =>
          import('./catalogo/catalogo.component').then(
            (m) => m.CatalogoComponent
          ),
        data: {
          title: 'Catálogo',
        },
      },
      {
        path: 'curso/:id',
        loadComponent: () =>
          import('./catalogo/catalogo.component').then(
            (m) => m.CatalogoComponent
          ),
        data: {
          title: 'Catálogo',
        },
      },
      {
        path: 'carrito',
        loadComponent: () =>
          import('./carrito/carrito.component').then((m) => m.CarritoComponent),
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./sign-in/sign-in.component').then((m) => m.SignInComponent),
      },
      {
        path: 'nosotros',
        loadComponent: () =>
          import('./nosotros/nosotros.component').then(
            (m) => m.NosotrosComponent
          ),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./contacto/contacto.component').then(
            (m) => m.ContactoComponent
          ),
      },
    ],
  },
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutesModule {}
