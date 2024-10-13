import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-default.component.html',
  styleUrl: './modal-default.component.css',
})
export class ModalDefaultComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal Title';
  @Output() close = new EventEmitter<void>();
  closeModal() {
    this.close.emit();
  }
}
