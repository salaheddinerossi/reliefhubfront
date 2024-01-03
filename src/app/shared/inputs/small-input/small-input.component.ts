import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-small-input',
  templateUrl: './small-input.component.html',
  styleUrls: ['./small-input.component.css']
})
export class SmallInputComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any): void {
    this.valueChange.emit(event.target.value);
  }

}
