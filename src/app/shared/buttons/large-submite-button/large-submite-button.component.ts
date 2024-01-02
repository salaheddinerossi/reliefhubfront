import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-large-submite-button',
  templateUrl: './large-submite-button.component.html',
  styleUrls: ['./large-submite-button.component.css']
})
export class LargeSubmiteButtonComponent {

  @Input() text:String = "";
  @Output() submitEvent = new EventEmitter<void>();

  onSubmit(): void {
    this.submitEvent.emit();
  }

}
