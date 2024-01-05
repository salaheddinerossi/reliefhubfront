import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() placeholder: string = '';
  internalValue: string = '';
  @Input() name:string = "";

  @Input()
  get value(): string {
    return this.internalValue;
  }

  set value(val: string) {
    if (val !== this.internalValue) {
      this.internalValue = val;
      this.valueChange.emit(this.internalValue);
    }
  }

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any): void {
    this.value = event.target.value;
  }
}
