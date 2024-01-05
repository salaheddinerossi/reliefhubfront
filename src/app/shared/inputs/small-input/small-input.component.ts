import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-input',
  template: `<input [placeholder]="placeholder" [name]="name" [type]="type" [value]="internalValue" (input)="onInput($event)" class="w-full own-style py-3 px-4">`,
  styleUrls: ['./small-input.component.css']
})
export class SmallInputComponent {
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  internalValue: string = '';

  @Input()
  get value(): string {
    return this.internalValue;
  }

  set value(val: string) {
    this.internalValue = val;
    this.valueChange.emit(this.internalValue);
  }

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any): void {
    this.value = event.target.value;
  }
}
