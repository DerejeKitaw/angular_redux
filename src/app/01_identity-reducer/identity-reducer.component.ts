import { Component, OnInit } from '@angular/core';
interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

@Component({
  selector: 'app-identity-reducer',
  templateUrl: './identity-reducer.component.html',
  styleUrls: ['./identity-reducer.component.css']
})
export class IdentityReducerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  run(): void {
    const reducer: Reducer<number> = (state: number, action: Action) => {
      return state;
    };
    // If there is no Action will return the initial state
    console.log(reducer(0, null)); // -> 0

  }
}
