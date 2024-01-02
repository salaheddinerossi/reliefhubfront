import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-large-input',
  templateUrl: './large-input.component.html',
  styleUrls: ['./large-input.component.css']
})
export class LargeInputComponent {

  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any): void {
    this.valueChange.emit(event.target.value);
  }


}
