import { Component, Inject , OnInit} from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as CounterActions from './counter.actions';
@Component({
  selector: 'app-redux-counter',
  templateUrl: './redux-counter.component.html',
  styleUrls: ['./redux-counter.component.css']
})
export class ReduxCounterComponent implements OnInit {
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
  ngOnInit() {
  }
}
