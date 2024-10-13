import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../../interfaces/Videos';

@Component({
  selector: 'app-cart-video-create',
  standalone: true,
  imports: [CdkDragHandle],
  templateUrl: './cart-video-create.component.html',
  styleUrl: './cart-video-create.component.css',
})
export class CartVideoCreateComponent {
  @Input() data: Video | undefined;
  @Output() edit = new EventEmitter();
}
