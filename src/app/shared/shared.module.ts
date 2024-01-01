
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import shared components
import {BigLayoutComponent} from "./layout/big-layout/big-layout.component";
import {SmallLayoutComponent} from "./layout/small-layout/small-layout.component";
import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import { ZoneTextComponent } from './layout/zone-text/zone-text.component';
import { CardsComponent } from './layout/cards/cards.component';

@NgModule({
    declarations: [
        BigLayoutComponent,
        SmallLayoutComponent,
        NavBarComponent,
        FooterComponent,
        ZoneTextComponent,
        CardsComponent
    ],
    imports: [
        CommonModule
    ],
  exports: [
    BigLayoutComponent,
    SmallLayoutComponent,
    NavBarComponent,
    FooterComponent,
    CardsComponent

  ]
})
export class SharedModule { }
