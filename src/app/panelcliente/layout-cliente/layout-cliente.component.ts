import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout-cliente',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './layout-cliente.component.html',
  styleUrl: './layout-cliente.component.css',
})
export class LayoutClienteComponent {}
