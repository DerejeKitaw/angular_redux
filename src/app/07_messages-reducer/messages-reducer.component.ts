import { Component, OnInit } from '@angular/core';
import { Action, Reducer, Store } from './lib/miniRedux';

interface AppState {
  messages: string[];
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}
@Component({
  selector: 'app-messages-reducer',
  templateUrl: './messages-reducer.component.html',
  styleUrls: ['./messages-reducer.component.css']
})
export class MessagesReducerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  run(): void {
    const reducer: Reducer<AppState> = (
      state: AppState,
      action: Action
    ): AppState => {
      switch (action.type) {
        case 'ADD_MESSAGE':
          return {
            messages: state.messages.concat((<AddMessageAction>action).message)
          };
        case 'DELETE_MESSAGE':
          let idx = (<DeleteMessageAction>action).index;
          return {
            messages: [
              ...state.messages.slice(0, idx),
              ...state.messages.slice(idx + 1, state.messages.length)
            ]
          };
        default:
          return state;
      }
    };

    // create a new store
    const store = new Store<AppState>(reducer, { messages: [] });
    console.log(store.getState()); // -> { messages: [] }

    store.dispatch({
      type: 'ADD_MESSAGE',
      message: 'Would you say the fringe was made of silk?'
    } as AddMessageAction);

    store.dispatch({
      type: 'ADD_MESSAGE',
      message: 'Wouldnt have no other kind but silk'
    } as AddMessageAction);

    store.dispatch({
      type: 'ADD_MESSAGE',
      message: 'Has it really got a team of snow white horses?'
    } as AddMessageAction);

    console.log(store.getState());
    // ->
    // { messages:
    //    [ 'Would you say the fringe was made of silk?',
    //      'Wouldnt have no other kind but silk',
    //      'Has it really got a team of snow white horses?' ] }

    store.dispatch({
      type: 'DELETE_MESSAGE',
      index: 1
    } as DeleteMessageAction);

    console.log(store.getState());
    // ->
    // { messages:
    //    [ 'Would you say the fringe was made of silk?',
    //      'Has it really got a team of snow white horses?' ] }

    store.dispatch({
      type: 'DELETE_MESSAGE',
      index: 0
    } as DeleteMessageAction);

    console.log(store.getState());
    // ->
    // { messages: [ 'Has it really got a team of snow white horses?' ] }
  }
}
