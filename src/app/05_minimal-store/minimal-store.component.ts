import { Component, OnInit } from '@angular/core';
interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

class Store<T> {
  private _state: T;

  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
  }
}
@Component({
  selector: 'app-minimal-store',
  templateUrl: './minimal-store.component.html',
  styleUrls: ['./minimal-store.component.css']
})
export class MinimalStoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  run(): void {
    // same reducer as before
    const reducer: Reducer<number> = (state: number, action: Action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        case 'PLUS':
          return state + action.payload;
        default:
          return state;
      }
    };

    // create a new store
    const store = new Store<number>(reducer, 0);
    console.log(store.getState()); // -> 0

    store.dispatch({ type: 'INCREMENT' });
    console.log(store.getState()); // -> 1

    store.dispatch({ type: 'INCREMENT' });
    console.log(store.getState()); // -> 2

    store.dispatch({ type: 'DECREMENT' });
    console.log(store.getState()); // -> 1
  }
}
