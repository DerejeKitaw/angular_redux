# Define application state
app.state.ts
```ts
export interface AppState {
  counter: number;
};
```
# Defining Action Creators 
counter.actions.ts
```ts
import {
  Action,
  ActionCreator
} from 'redux';

export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const DECREMENT: string = 'DECREMENT';
export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
```
# Defining the Reducers 
counter.reducer.ts
```ts
import { Reducer, Action } from 'redux';
import { AppState } from './app.state';
import {
  INCREMENT,
  DECREMENT
} from './counter.actions';

const initialState: AppState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };
```

# Creating the Store 
app.store.ts
```ts
import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import { AppState } from './app.state';
import {
  counterReducer as reducer
} from './counter.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
```


# install the [Redux Devtools Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
> In order to use the Devtools we have to do one thing: add it to our store. 
```ts
const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;
```
Not everyone who uses our app will necessarily have the Redux Devtools installed. The code above will check for window.devToolsExtension, which is defined by Redux Devtools, and if it exists, we will use it. If it doesn’t exist, we’re just returning an identity function (f => f) that will return whatever is passed to it.

# Providing the Store
> In Redux app, we need to make our store instance accessible everywhere in our app. How should we do this? We’ll use dependency injection (DI). When we want to make something available via DI, then we use the providers configuration to add it to the list of providers in our NgModule.
> When we provide something to the DI system, we specify two things:
1. the token to use to refer this injectable dependency
2. the way to inject the dependency
> Oftentimes if we want to provide a singleton service we might use the useClass option as in:
```ts
{ provide: SpotifyService, useClass: SpotifyService }
```
> In the case above, we’re using the class SpotifyService as the token in the DI system. The useClass option tells Angular to create an instance of SpotifyService and reuse that instance whenever the SpotifyService injection is requested (e.g. maintain a Singleton). One problem with us using this method is that `we don’t want Angular to create our store` - we did it ourselves above with createStore. We just want to use the store we’ve already created. To do this we’ll use the `useValue` option of provide. We’ve done this before with configurable values like API_URL:
```ts
{ provide: API_URL, useValue: 'http://localhost/api' }
```
> The one thing we have left to figure out is what token we want to use to inject. Our store is of type Store<AppState>:
app.store.ts
```ts
export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
```
> `Store is an interface`, not a class and, unfortunately, we can’t use interfaces as a dependency injection key.
If you’re interested in why we can’t use an interface as a DI key, it’s because TypeScript interfaces are removed after compilation and not available at runtime. 
> This means we need to create our own token that we’ll use for injecting the store. Thankfully, Angular makes this easy to do. Let’s create this token in it’s own file so that way we can import it from anywhere in our app.store.ts
```ts
export const AppStore = new InjectionToken('App.store');
```
Here we have created a `const AppStore` which uses the InjectionToken class from Angular. `InjectionToken` is a better choice than injecting a `string` directly because it helps us avoid `collisions`. Now we can use this token AppStore with provide. Let’s do that now.
# Bootstrapping the App 
> Bootstrapping the App Back in app.module.ts, let’s create the NgModule we’ll use to bootstrap our app:
app.module.ts 
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appStoreProviders } from './app.store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ appStoreProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
> Now we are able to get a reference to our Redux store anywhere in our app by injecting AppStore. The place we need it most now is our AppComponent.
> Notice that we exported the function appStoreProviders from app.store.ts and then used that function in providers. Why not use the { provide: ..., useFactory: ... } syntax directly? The answer is related to AOT - if we want to ahead-of-time compile a provider that uses a function, we must first export is as a function from another module.
# The AppComponent 
> With our setup out of the way, we can start creating our component that actually displays the counter to the user and provides buttons for the user to change the state.
app.component.ts 
```ts
import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as CounterActions from './counter.actions';
```
> We import Store from Redux as well as our injector token AppStore, which will get us a reference to the singleton instance of our store. We also import the AppState type, which helps us know the structure of the central state. Lastly, we import our action creators with * as CounterActions. This syntax will let us call CounterActions.increment() to create an INCREMENT action.
# The template 
app.component.html 
```html
<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <div class="caption">
        <h3>Counter</h3>
        <p>Custom Store</p>

        <p>
          The counter value is:
          <b>{{ counter }}</b>
        </p>

        <p>
          <button (click)="increment()"
                  class="btn btn-primary">
            Increment
          </button>
          <button (click)="decrement()"
                  class="btn btn-default">
             Decrement
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
```
The three things to note here are that we’re:
1. displaying the value of the counter in {{ counter }} 
2. calling the increment() function in a button and 
3. calling the decrement() function in a button.

# The constructor 
Remember that this component depends on the Store, so we need to inject it in the constructor. This is how we use our custom AppStore token to inject a dependency:
```ts
import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
```
> We use the @Inject decorator to inject AppStore - notice that we define the type of the variable store to Store<AppState>. Having a different injection token than the type of the dependency injected is a little different than when we use the class as the injection token (and Angular infers what to inject). We set the store to an instance variable (with private store). Now that we have the store we can listen for changes. Here we call store.subscribe and call this.readState(), which we define below.
> The store will call subscribe only `when a new action is dispatched`, so in this case we need to make sure we manually call readState at least once to ensure that our component gets the initial data. The method readState reads from our store and updates `this.counter` to the current value. Because this.counter is a property on this class and bound in the view, Angular will detect when it changes and re-render this component. We define two helper methods: increment and decrement, each of which dispatch their respective actions to the store.

