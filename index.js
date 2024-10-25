import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware,
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLouderAndBolderAndRepeatThreeTimes = compose(
  embolden,
  makeLouder,
  repeatThreeTimes,
);

const reducer = (state = { value: 1 }, action) => {
  if (action.type === 'ADD'){
    const value = state.value;
    const amount = action.payload.amount;
    return {
      value: value + amount
    }
  }

  return state;
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {console.log(store.getState().value)})

store.dispatch({ type: "ADD", payload: { amount: 2 } });
store.dispatch({ type: "ADD", payload: { amount: 2 } });

unsubscribe();
store.dispatch({ type: "ADD", payload: { amount: 2 } });
