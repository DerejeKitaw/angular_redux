import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentityReducerComponent } from './01_identity-reducer/identity-reducer.component';
import { AdjustingReducerComponent } from './02_adjusting-reducer/adjusting-reducer.component';
import { AdjustingReducerSwitchComponent } from './03_adjusting-reducer-switch/adjusting-reducer-switch.component';
import { PlusActionComponent } from './04_plus-action/plus-action.component';
import { MinimalStoreComponent } from './05_minimal-store/minimal-store.component';
import { RxStoreComponent } from './06_rx-store/rx-store.component';
import { StoreWithSubscribeComponent } from './06_store-with-subscribe/store-with-subscribe.component';
import { MessagesReducerComponent } from './07_messages-reducer/messages-reducer.component';
import { ActionCreatorsComponent } from './08_action-creators/action-creators.component';
import { RealReduxComponent } from './09_real-redux/real-redux.component';
import { ReduxCounterComponent } from './10_redux-counter/redux-counter.component';
import { appStoreProviders } from './10_redux-counter/app.store';

@NgModule({
  declarations: [
    AppComponent,
    IdentityReducerComponent,
    AdjustingReducerComponent,
    AdjustingReducerSwitchComponent,
    PlusActionComponent,
    MinimalStoreComponent,
    // RxStoreComponent,
    StoreWithSubscribeComponent,
    MessagesReducerComponent,
    ActionCreatorsComponent,
    RealReduxComponent,
    ReduxCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
