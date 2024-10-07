import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-layout-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ThemeToggleComponent],
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.css',
})
export class LayoutDashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    initFlowbite();
  }
}
