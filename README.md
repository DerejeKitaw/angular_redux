# AngularRedux
The three steps in planning Redux apps are to:
1. Define the structure of our central app state
2. Define actions that will change that state and
3. Define a reducer that takes the old state and an action and returns a new state.

# At a high level redux in Angular do the following:
1. Create our Store and make it accessible to our whole app via dependency injection
2. Subscribe to changes to the Store and display them in our components
3. When something changes (a button is pressed) we will dispatch an action to the Store.
