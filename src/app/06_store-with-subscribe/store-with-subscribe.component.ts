import { Component, OnInit } from '@angular/core';
interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}

class Store<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => {
      // returns an "unsubscribe" function
      this._listeners = this._listeners.filter(l => l !== listener);
    };
  }
}
@Component({
  selector: 'app-store-with-subscribe',
  templateUrl: './store-with-subscribe.component.html',
  styleUrls: ['./store-with-subscribe.component.css']
})
export class StoreWithSubscribeComponent implements OnInit {
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

    // subscribe
    const unsubscribe = store.subscribe(() => {
      console.log('subscribed: ', store.getState());
    });

    store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 1
    store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 2

    unsubscribe();
    store.dispatch({ type: 'DECREMENT' }); // (nothing logged)

    // decrement happened, even though we weren't listening for it
    console.log(store.getState()); // -> 1
  }
}
