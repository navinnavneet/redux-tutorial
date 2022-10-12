import * as actionTypes from "./actionType";

const initialState = {
  counter: 0,
};

const incrementCount = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

const decrementCount = (state, action) => {
  return {
    counter: state.counter - 1,
  };
};

const increaseCounter = (state, action) => {
  return {
    counter: state.counter + action.payload,
  };
};

const decreaseCounter = (state, action) => {
  return {
    counter: state.counter - action.payload,
  };
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNT:
      return incrementCount(state, action);

    case actionTypes.DECREMENT_COUNT:
      return decrementCount(state, action);

    case actionTypes.INCREASE_COUNT:
      return increaseCounter(state, action);

    case actionTypes.DECREASE_COUNT:
      return decreaseCounter(state, action);

    case actionTypes.SLOW_INCREASE:
      return increaseCounter(state, action);

    case actionTypes.SLOW_DECREASE:
      return decreaseCounter(state, action);

    default:
      return state;
  }
}
