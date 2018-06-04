import { Component, OnInit } from '@angular/core';
interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}
@Component({
  selector: 'app-adjusting-reducer-switch',
  templateUrl: './adjusting-reducer-switch.component.html',
  styleUrls: ['./adjusting-reducer-switch.component.css']
})
export class AdjustingReducerSwitchComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  run(): void {
    const reducer: Reducer<number> = (state: number, action: Action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state; // <-- dont forget!
      }
    };

    const incrementAction: Action = { type: 'INCREMENT' };
    console.log(reducer(0, incrementAction)); // -> 1
    console.log(reducer(1, incrementAction)); // -> 2

    const decrementAction: Action = { type: 'DECREMENT' };
    console.log(reducer(100, decrementAction)); // -> 99

    // any other action just returns the input state
    const unknownAction: Action = { type: 'UNKNOWN' };
    console.log(reducer(100, unknownAction)); // -> 100


  }
}