import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ComponentsComponent } from './components.component';

import { OurStoryComponent } from './our-story/our-story.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { MenuComponent } from './menu/menu.component';
import { VisitComponent } from './visit/visit.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
       
        OurStoryComponent,
        CuisineComponent,
        MenuComponent,
        VisitComponent,
        ReservationComponent
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
