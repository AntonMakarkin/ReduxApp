import {createStore} from 'redux';

const reducer = (state = 0, action) => { //must be clean function
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RES':
      return 0;
    default:
      return state
  }
}

//creating the store
let store = createStore(reducer);

//subsidiary functions
const inc = () => ({type: 'INC'}); //action-creators
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'})

//click-buttons
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
});

document.getElementById('res').addEventListener('click', () => {
  store.dispatch(res())
});

//function updates counter
const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

/*store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})*/


/*let state = reducer(undefined, {});

state = reducer(state, {type: 'INC'});
console.log(state);
state = reducer(state, {type: 'INC'});
console.log(state);*/