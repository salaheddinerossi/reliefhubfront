import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-zone-text',
  templateUrl: './zone-text.component.html',
  styleUrls: ['./zone-text.component.css']
})
export class ZoneTextComponent {

  constructor(private router:Router) {
  }

  @Input() zoneTextData={
    header:"",
    text:"",
    greenButtonText:"",
    greenButtonLink:"",
    yellowButtonText:"",
    yellowButtonLink:""
  };

  navigateTo(s: string) {
    this.router.navigate([s]);
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', });
  }

}
