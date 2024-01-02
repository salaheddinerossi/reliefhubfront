import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-green-select-input',
  templateUrl: './green-select-input.component.html',
  styleUrls: ['./green-select-input.component.css']
})
export class GreenSelectInputComponent {
  @Input() options: {label: string, value: any}[] = [];
  @Input() selectedValue: any;
  @Output() selectedValueChange = new EventEmitter<any>();

  onChange(newValue: any): void {
    this.selectedValueChange.emit(newValue);
  }

}
