import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-form-select-input',
  templateUrl: './form-select-input.component.html',
  styleUrls: ['./form-select-input.component.css']
})
export class FormSelectInputComponent {

  @Input() options: {label: string, value: any}[] = [];
  @Input() selectedValue: any;
  @Input() placeholder:string = "";
  @Output() selectedValueChange = new EventEmitter<any>();

  onChange(newValue: any): void {
    this.selectedValueChange.emit(newValue);
  }



}
