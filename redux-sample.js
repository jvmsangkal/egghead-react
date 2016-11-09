/*
3 principles of redux
1. the state of the application is stored into one object
2. the state is read only. you can only modify the state by dispatching actions
    - actions contain details about the action
{
    type: 'Increment'
    value: 1
}
3. state mutations or reducers should be pure functions which means it should not modify the previous state but return a new object instead
    - if the action given is not defined inside the reducer. It should return the original state given
*/

// sample reducer
// - reducers can be divided to many reducers
const counter = (state=0, action) => { // add a default value as the initial state
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

import {createStore} from 'redux';

const store = createStore(counter); //accept function as reducer
// calls a dummy dispatch action to get the reducer return the default state
// has a second arguement, persistedState

store.getState(); // gets the current state of the redux store
store.dispatch({ type: 'INCREMENT' }); //dispatches action to the reducer

componentDidMount () {
    // returns a function to unsubscribe
    this.unsubscribe = store.subscribe(() => {
        this.forceUpdate(); //forces the component to rerender
    }); // accepts a callback function to reflect the current application state
}

componentWillUnmount () {
    this.unsubscribe();
}

render () {
    const state = store.getState();
}

/*
    react-redux provides a connect() function to automatically subscribe the component to the store
*/
