import * as actionTypes from "./actionType";

export function increment() {
  return {
    type: actionTypes.INCREMENT_COUNT,
  };
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT_COUNT,
  };
}

export function increaseCount(num) {
  return {
    type: actionTypes.INCREASE_COUNT,
    payload: num,
  };
}

export function decreaseCount(num) {
  return {
    type: actionTypes.DECREASE_COUNT,
    payload: num,
  };
}

export function slowInc(num) {
  return {
    type: actionTypes.SLOW_INCREASE,
    payload: num,
  };
}

export function slowDec(num) {
  return {
    type: actionTypes.SLOW_DECREASE,
    payload: num,
  };
}

export function slowIncrease(num) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(slowInc(num));
    }, 2000);
  };
}

export function slowDecrease(num) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(slowDec(num));
    }, 2000);
  };
}
