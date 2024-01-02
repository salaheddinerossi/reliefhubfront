import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any): void {
    this.valueChange.emit(event.target.value);
  }

}
