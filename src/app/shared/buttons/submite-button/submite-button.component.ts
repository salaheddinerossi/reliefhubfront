import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-submite-button',
  templateUrl: './submite-button.component.html',
  styleUrls: ['./submite-button.component.css']
})
export class SubmiteButtonComponent {

  @Output() submitEvent = new EventEmitter<void>();

  onSubmit(): void {
    this.submitEvent.emit();
  }

}
