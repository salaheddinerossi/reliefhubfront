
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BigLayoutComponent} from "./layout/big-layout/big-layout.component";
import {SmallLayoutComponent} from "./layout/small-layout/small-layout.component";
import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import { ZoneTextComponent } from './layout/zone-text/zone-text.component';
import { CardsComponent } from './layout/cards/cards.component';
import { SubmiteButtonComponent } from './buttons/submite-button/submite-button.component';
import { SmallInputComponent } from './inputs/small-input/small-input.component';
import { LargeInputComponent } from './inputs/large-input/large-input.component';
import { TextAreaComponent } from './inputs/text-area/text-area.component';
import { LargeSubmiteButtonComponent } from './buttons/large-submite-button/large-submite-button.component';
import { FormSelectInputComponent } from './input/form-select-input/form-select-input.component';
import { GreenSelectInputComponent } from './input/green-select-input/green-select-input.component';
import { WorldMapComponent } from './maps/world-map/world-map.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { TitleComponent } from './texts/title/title.component';
import { DescriptionComponent } from './texts/description/description.component';
import {FormsModule} from "@angular/forms";
import { InfoComponent } from './texts/info/info.component';



@NgModule({
    declarations: [
        BigLayoutComponent,
        SmallLayoutComponent,
        NavBarComponent,
        FooterComponent,
        ZoneTextComponent,
        CardsComponent,
        SmallInputComponent,
        LargeInputComponent,
        TextAreaComponent,
        SubmiteButtonComponent,
        LargeSubmiteButtonComponent,
        FormSelectInputComponent,
        GreenSelectInputComponent,
        WorldMapComponent,
        AnnouncementComponent,
        TitleComponent,
        DescriptionComponent,
        InfoComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
  ],
    exports: [
        BigLayoutComponent,
        SmallLayoutComponent,
        NavBarComponent,
        FooterComponent,
        CardsComponent,
        SubmiteButtonComponent,
        LargeSubmiteButtonComponent,
        LargeInputComponent,
        SmallInputComponent,
        TextAreaComponent,
        FormSelectInputComponent,
        GreenSelectInputComponent,
        TitleComponent,
        WorldMapComponent,
        AnnouncementComponent

    ]
})
export class SharedModule { }
