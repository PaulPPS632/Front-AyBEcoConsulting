import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-layout-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.css',
})
export class LayoutDashboardComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('flowbite loaded', flowbite);
    });
  }
}
