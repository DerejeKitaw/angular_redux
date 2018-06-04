import { Component, OnInit } from '@angular/core';
interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}
@Component({
  selector: 'app-adjusting-reducer',
  templateUrl: './adjusting-reducer.component.html',
  styleUrls: ['./adjusting-reducer.component.css']
})
export class AdjustingReducerComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  run(): void {
    let reducer: Reducer<number> = (state: number, action: Action) => {
      if (action.type === 'INCREMENT') {
        return state + 1;
      }
      if (action.type === 'DECREMENT') {
        return state - 1;
      }
      return state;
    };

    let incrementAction: Action = { type: 'INCREMENT' };

    console.log(reducer(0, incrementAction)); // -> 1
    console.log(reducer(1, incrementAction)); // -> 2

    let decrementAction: Action = { type: 'DECREMENT' };

    console.log(reducer(100, decrementAction)); // -> 99
  }
}
