import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentityReducerComponent } from './01_identity-reducer/identity-reducer.component';
import { AdjustingReducerComponent } from './02_adjusting-reducer/adjusting-reducer.component';
import { AdjustingReducerSwitchComponent } from './03_adjusting-reducer-switch/adjusting-reducer-switch.component';
import { PlusActionComponent } from './04_plus-action/plus-action.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentityReducerComponent,
    AdjustingReducerComponent,
    AdjustingReducerSwitchComponent,
    PlusActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
