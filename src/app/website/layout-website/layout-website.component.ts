import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderWebsiteComponent } from '../../components/header-website/header-website.component';

@Component({
  selector: 'app-layout-website',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, HeaderWebsiteComponent],
  templateUrl: './layout-website.component.html',
  styleUrl: './layout-website.component.css',
})
export class LayoutWebsiteComponent {}
